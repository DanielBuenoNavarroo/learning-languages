import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { GermanWords } from "@/lib/data";
import { Due, WordState } from "@/types/types";

const intervals: Record<number, number> = {
  1: 0,
  2: 0.5 * 60,
  3: 0.5 * 60,
  4: 2 * 60,
  5: 7 * 86400,
};

export const useSRS = () => {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [nextWord, setNextWord] = useState<WordState | null>(null);

  useEffect(() => {
    const init = async () => {
      const database = await SQLite.openDatabaseAsync("lingvist_clone.db");

      // GUARDA la DB en estado
      setDb(database);

      // Usa SOLO "database" aquí, NO "db"
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS user_word_state (
            id INTEGER PRIMARY KEY,
            srsLevel INTEGER NOT NULL,
            nextReview INTEGER NOT NULL,
            correctStreak INTEGER NOT NULL,
            wrongCount INTEGER NOT NULL,
            lastSeen INTEGER NOT NULL
        );
        `);

      // IMPORTANTE: llama a loadNextWord con la instancia directa
      await loadNextWord(database);
    };

    init();
  }, []);

  const getWordState = async (id: number) => {
    if (!db) return null;
    return await db.getFirstAsync(
      `SELECT * FROM user_word_state WHERE id = ?`,
      [id],
    );
  };

  const insertInitialState = async (id: number) => {
    if (!db) return;
    const now = Math.floor(Date.now() / 1000);

    await db.execAsync(`
    INSERT OR REPLACE INTO user_word_state
    (id, srsLevel, nextReview, correctStreak, wrongCount, lastSeen)
    VALUES (${Number(id)}, 1, ${Number(now)}, 0, 0, ${Number(now)})
  `);
  };

  const updateWordState = async (
    id: number,
    newLevel: number,
    correctStreak: number,
    wrongCount: number,
  ) => {
    if (!db) return;

    const now = Math.floor(Date.now() / 1000);
    const nextReview = now + intervals[newLevel];

    await db.execAsync(`
        UPDATE user_word_state
        SET srsLevel = ${Number(newLevel)},
            nextReview = ${Number(nextReview)},
            correctStreak = ${Number(correctStreak)},
            wrongCount = ${Number(wrongCount)},
            lastSeen = ${Number(now)}
        WHERE id = ${Number(id)}
    `);
  };

  const countNewWords = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getFirstAsync<{ count: number }>(
      "SELECT COUNT(*) AS count FROM user_word_state WHERE srsLevel = 1",
    );

    return result?.count ?? 0;
  };

  const countActiveWords = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getFirstAsync<{ count: number }>(
      "SELECT COUNT(*) AS count FROM user_word_state WHERE srsLevel BETWEEN 1 AND 4",
    );

    return result?.count ?? 0;
  };

  const findNextNewWord = async () => {
    if (!db) return null;

    const rows = await db.getAllAsync(`SELECT id FROM user_word_state`);
    const learnedIds = new Set(rows.map((r: any) => r.id));

    const newWords = GermanWords.filter((w) => !learnedIds.has(w.id));

    if (newWords.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * newWords.length);
    return newWords[randomIndex];
  };

  const loadNextWord = async (database?: SQLite.SQLiteDatabase) => {
    const dbToUse = database ?? db;
    if (!dbToUse) return;

    const now = Math.floor(Date.now() / 1000);

    const due = (await dbToUse.getFirstAsync(
      `
        SELECT *
        FROM user_word_state
        WHERE nextReview <= ?
        ORDER BY srsLevel ASC, lastSeen ASC
        LIMIT 1
      `,
      [now],
    )) as Due | undefined;

    if (due) {
      if (due.srsLevel === 5) {
        const newLevel = 4;
        const nextReview = now + intervals[newLevel];

        await dbToUse.execAsync(`
            UPDATE user_word_state
            SET srsLevel = ${newLevel},
                nextReview = ${nextReview},
                lastSeen = ${now}
            WHERE id = ${due.id}
        `);

        due.srsLevel = newLevel;
        due.nextReview = nextReview;
        due.lastSeen = now;
      }

      const baseWord = GermanWords.find((w) => w.id === due.id);
      setNextWord({ ...baseWord, ...due } as WordState);
      return;
    }

    const newCount = await countNewWords(dbToUse);
    const activeCount = await countActiveWords(dbToUse);

    if (activeCount >= 25) {
      const repeat = (await dbToUse.getFirstAsync(`
        SELECT *
        FROM user_word_state
        ORDER BY srsLevel ASC, lastSeen ASC
        LIMIT 1
      `)) as Due | undefined;

      if (repeat) {
        const baseWord = GermanWords.find((w) => w.id === repeat.id);
        setNextWord({ ...baseWord, ...repeat } as WordState);
        return;
      }
    }

    if (newCount < 10) {
      const nextBase = await findNextNewWord();
      if (nextBase) {
        await insertInitialState(nextBase.id);
        setNextWord({ ...nextBase, srsLevel: 1 } as WordState);
        return;
      }
    }

    const repeat = (await dbToUse.getFirstAsync(`
      SELECT *
      FROM user_word_state
      ORDER BY srsLevel ASC, lastSeen ASC
      LIMIT 1
    `)) as Due | undefined;

    if (repeat) {
      const baseWord = GermanWords.find((w) => w.id === repeat.id);
      setNextWord({ ...baseWord, ...repeat } as WordState);
      return;
    }

    const first = GermanWords[0];
    await insertInitialState(first.id);
    setNextWord(first as WordState);
  };

  const markCorrect = async () => {
    if (!nextWord) return;

    const newLevel = Math.min(nextWord.srsLevel + 1, 5);
    const correctStreak = nextWord.correctStreak + 1;

    await updateWordState(nextWord.id, newLevel, correctStreak, 0);
    await loadNextWord(db!);
  };

  const markWrong = async () => {
    if (!nextWord) return;

    const newLevel = Math.max(nextWord.srsLevel - 1, 1);

    await updateWordState(nextWord.id, newLevel, 0, nextWord.wrongCount + 1);
    await loadNextWord(db!);
  };

  const markSolution = async () => {
    if (!nextWord) return;

    await updateWordState(nextWord.id, 2, 0, nextWord.wrongCount);
    await loadNextWord(db!);
  };

  return {
    nextWord,
    markCorrect,
    markWrong,
    markSolution,
    reload: loadNextWord,
  };
};
