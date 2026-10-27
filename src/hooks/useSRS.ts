import * as SQLite from "expo-sqlite";
import { useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lastWasNew = useRef(false);

  const MIN_NEW_WORDS = 5;
  const MAX_NEW_WORDS = 10;
  const MAX_LEARNING_WORDS = 15;

  // Inicializar SQLite
  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      let database: SQLite.SQLiteDatabase | null = null;

      try {
        console.log("SRS: abriendo base de datos...");

        database = await SQLite.openDatabaseAsync("lingvist_clone.db");

        console.log("SRS: base de datos abierta");

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

        if (cancelled) {
          await database.closeAsync();
          return;
        }

        setDb(database);

        console.log("SRS: tabla preparada");

        await loadNextWord(database);

        console.log("SRS: inicialización completada");
      } catch (err) {
        console.error("Error inicializando SRS:", err);

        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "No se pudo inicializar la base de datos.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  // Insertar el estado inicial de una palabra
  const insertInitialState = async (
    id: number,
    database: SQLite.SQLiteDatabase,
  ) => {
    const now = Math.floor(Date.now() / 1000);

    await database.runAsync(
      `INSERT OR IGNORE INTO user_word_state
       (id, srsLevel, nextReview, correctStreak, wrongCount, lastSeen)
       VALUES (?, 1, ?, 0, 0, ?)`,
      id,
      now,
      now,
    );
  };

  // Actualizar el estado de una palabra
  const updateWordState = async (
    id: number,
    newLevel: number,
    correctStreak: number,
    wrongCount: number,
    database: SQLite.SQLiteDatabase,
  ) => {
    const now = Math.floor(Date.now() / 1000);
    const nextReview = now + (intervals[newLevel] ?? 0);

    await database.runAsync(
      `UPDATE user_word_state
       SET srsLevel = ?,
           nextReview = ?,
           correctStreak = ?,
           wrongCount = ?,
           lastSeen = ?
       WHERE id = ?`,
      newLevel,
      nextReview,
      correctStreak,
      wrongCount,
      now,
      id,
    );
  };

  // Contar palabras nuevas
  const countNewWords = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getFirstAsync<{ count: number }>(
      `SELECT COUNT(*) AS count
       FROM user_word_state
       WHERE srsLevel = 1`,
    );

    return result?.count ?? 0;
  };

  const countLearningWords = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getFirstAsync<{ count: number }>(`
    SELECT COUNT(*) AS count
    FROM user_word_state
    WHERE srsLevel BETWEEN 2 AND 4
  `);

    return result?.count ?? 0;
  };

  // Contar palabras activas
  const countActiveWords = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getFirstAsync<{ count: number }>(
      `SELECT COUNT(*) AS count
       FROM user_word_state
       WHERE srsLevel BETWEEN 1 AND 4`,
    );

    return result?.count ?? 0;
  };

  // Buscar una palabra que todavía no esté registrada
  const findNextNewWord = async (database: SQLite.SQLiteDatabase) => {
    // 1. Obtener IDs ya aprendidos
    const rows = await database.getAllAsync<{ id: number }>(
      "SELECT id FROM user_word_state",
    );

    const learnedIds = new Set(rows.map((row) => row.id));

    // 2. Orden de niveles
    const levelOrder = ["a1", "a2", "b1", "b2", "c1", "c2"];

    // 3. Buscar el primer nivel que tenga palabras nuevas
    for (const level of levelOrder) {
      const newWordsInLevel = GermanWords.filter(
        (word) => word.level === level && !learnedIds.has(word.id),
      );

      if (newWordsInLevel.length > 0) {
        // 4. Elegir una palabra aleatoria dentro del nivel
        const randomIndex = Math.floor(Math.random() * newWordsInLevel.length);
        return newWordsInLevel[randomIndex];
      }
    }

    // Si no queda ninguna palabra nueva
    return null;
  };

  const weightedRandom = (items: Due[], getWeight: (item: Due) => number) => {
    const weights = items.map(getWeight);
    const total = weights.reduce((a, b) => a + b, 0);

    if (total === 0) return null;

    let r = Math.random() * total;

    for (let i = 0; i < items.length; i++) {
      r -= weights[i];
      if (r <= 0) return items[i];
    }

    return items[items.length - 1];
  };

  // Cargar la siguiente palabra
  const loadNextWord = async (database?: SQLite.SQLiteDatabase) => {
    const dbToUse = database ?? db;
    if (!dbToUse) return;

    const now = Math.floor(Date.now() / 1000);

    let newCount = await countNewWords(dbToUse);
    const learningCount = await countLearningWords(dbToUse);

    if (learningCount < MAX_LEARNING_WORDS) {
      while (newCount < MIN_NEW_WORDS && newCount < MAX_NEW_WORDS) {
        const nextBase = await findNextNewWord(dbToUse);
        if (!nextBase) break;

        await insertInitialState(nextBase.id, dbToUse);
        newCount++;
      }
    }

    const due = await dbToUse.getFirstAsync<Due>(
      `SELECT *
     FROM user_word_state
     WHERE srsLevel BETWEEN 2 AND 4
       AND nextReview <= ?
     ORDER BY nextReview ASC, lastSeen ASC
     LIMIT 1`,
      now,
    );

    if (due) {
      const baseWord = GermanWords.find((w) => w.id === due.id);
      if (baseWord) {
        setNextWord({ ...baseWord, ...due } as WordState);
        return;
      }
    }

    const rows = await dbToUse.getAllAsync<Due>(
      `SELECT *
     FROM user_word_state
     WHERE srsLevel BETWEEN 1 AND 4`,
    );

    if (rows.length === 0) {
      setNextWord(null);
      return;
    }

    const getWeight = (row: Due) => {
      switch (row.srsLevel) {
        case 1:
          return 5;
        case 2:
          return 4;
        case 3:
          return 3;
        case 4:
          return 2;
        default:
          return 0;
      }
    };

    const selected = weightedRandom(rows, getWeight);

    if (!selected) {
      setNextWord(null);
      return;
    }

    const baseWord = GermanWords.find((w) => w.id === selected.id);

    if (!baseWord) {
      setNextWord(null);
      return;
    }

    setNextWord({ ...baseWord, ...selected } as WordState);
  };

  const markCorrect = async () => {
    if (!nextWord || !db) return;

    const current = await getUpdatedState(nextWord.id);
    if (!current) return;

    const isFirstTime =
      current.srsLevel === 1 &&
      current.correctStreak === 0 &&
      current.wrongCount === 0;

    const newLevel = isFirstTime ? 5 : Math.min(current.srsLevel + 1, 5);

    await updateWordState(
      nextWord.id,
      newLevel,
      current.correctStreak + 1,
      current.wrongCount,
      db,
    );
  };

  // Marcar respuesta incorrecta
  const markWrong = async () => {
    if (!nextWord || !db) return;

    let newLevel;

    if (nextWord.srsLevel === 1) {
      newLevel = 2;
    } else {
      newLevel = Math.max(nextWord.srsLevel - 1, 2);
    }

    await updateWordState(
      nextWord.id,
      newLevel,
      0,
      nextWord.wrongCount + 1,
      db,
    );
  };

  const markSolution = async () => {
    if (!nextWord || !db) return;

    await updateWordState(nextWord.id, 2, 0, nextWord.wrongCount, db);
  };

  const getUpdatedState = async (id: number) => {
    if (!db) return null;
    const state = await db.getFirstAsync<Due>(
      "SELECT * FROM user_word_state WHERE id = ?",
      id,
    );
    return state;
  };

  const reload = async () => {
    await loadNextWord();
  };

  const getLearnedWords = async (): Promise<WordState[]> => {
    if (!db) return [];

    const rows = await db.getAllAsync<Due>(
      `SELECT *
     FROM user_word_state
     ORDER BY srsLevel DESC, lastSeen DESC`,
    );

    const words: WordState[] = [];

    for (const row of rows) {
      const baseWord = GermanWords.find((word) => word.id === row.id);

      if (baseWord) {
        words.push({
          ...baseWord,
          ...row,
        } as WordState);
      }
    }

    return words;
  };

  const deleteAllData = async (): Promise<void> => {
    if (!db) {
      throw new Error("La base de datos todavía no está lista");
    }

    try {
      await db.withTransactionAsync(async () => {
        await db.runAsync("DELETE FROM user_word_state");
      });

      const result = await db.getFirstAsync<{ count: number }>(
        "SELECT COUNT(*) AS count FROM user_word_state",
      );

      console.log("Filas restantes:", result?.count ?? -1);

      lastWasNew.current = false;
      setNextWord(null);
    } catch (err) {
      console.error("Error borrando los datos:", err);
      throw err;
    }
  };

  return {
    deleteAllData,
    nextWord,
    markCorrect,
    markWrong,
    markSolution,
    getUpdatedState,
    getLearnedWords,
    reload,
    loading,
    error,
  };
};
