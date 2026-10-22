import * as SQLite from "expo-sqlite";

export let db: SQLite.SQLiteDatabase;

export const initDatabase = async () => {
  db = await SQLite.openDatabaseAsync("lingvist_clone.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS user_word_state (
      id INTEGER PRIMARY KEY,
      srsLevel INTEGER NOT NULL,
      nextReview INTEGER NOT NULL,
      correctStreak INTEGER NOT NULL,
      wrongCount INTEGER NOT NULL,
      lastSeen INTEGER NOT NULL
    );
  `);
};

export const insertInitialState = async (id: number) => {
  const now = Math.floor(Date.now() / 1000);

  await db.runAsync(
    `
      INSERT OR REPLACE INTO user_word_state
      (id, srsLevel, nextReview, correctStreak, wrongCount, lastSeen)
      VALUES (?, 1, ?, 0, 0, ?);
    `,
    [id, now, now]
  );
};

export const getWordState = async (id: number) => {
  return await db.getFirstAsync(
    `SELECT * FROM user_word_state WHERE id = ?;`,
    [id]
  );
};

export const updateWordState = async (
  id: number,
  newLevel: number,
  nextReview: number,
  correctStreak: number,
  wrongCount: number
) => {
  const now = Math.floor(Date.now() / 1000);

  await db.runAsync(
    `
      UPDATE user_word_state
      SET srsLevel = ?,
          nextReview = ?,
          correctStreak = ?,
          wrongCount = ?,
          lastSeen = ?
      WHERE id = ?;
    `,
    [newLevel, nextReview, correctStreak, wrongCount, now, id]
  );
};

export const getNextWordDue = async () => {
  const now = Math.floor(Date.now() / 1000);

  return await db.getFirstAsync(
    `
      SELECT *
      FROM user_word_state
      WHERE nextReview <= ?
      ORDER BY srsLevel ASC, lastSeen ASC
      LIMIT 1;
    `,
    [now]
  );
};
