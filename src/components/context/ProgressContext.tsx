import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as SQLite from "expo-sqlite";

const DAILY_GOAL = 50;

type ProgressContextType = {
  progress: number;
  learnedToday: number;
  weeklyProgress: Record<string, number>;
  incrementProgress: () => Promise<void>;
  resetProgress: () => Promise<void>;
};

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined,
);

const getDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getToday = () => getDateKey(new Date());

const getWeekRange = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return {
    start: getDateKey(monday),
    end: getDateKey(sunday),
  };
};

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [learnedToday, setLearnedToday] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState<Record<string, number>>(
    {},
  );
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      let database: SQLite.SQLiteDatabase | null = null;

      try {
        database = await SQLite.openDatabaseAsync("lingvist_clone.db");

        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS daily_progress (
            day TEXT PRIMARY KEY,
            learnedCount INTEGER NOT NULL DEFAULT 0
          );
        `);

        const today = getToday();
        const { start, end } = getWeekRange();

        const todayResult = await database.getFirstAsync<{
          learnedCount: number;
        }>("SELECT learnedCount FROM daily_progress WHERE day = ?", today);

        const rows = await database.getAllAsync<{
          day: string;
          learnedCount: number;
        }>(
          `SELECT day, learnedCount
           FROM daily_progress
           WHERE day BETWEEN ? AND ?`,
          start,
          end,
        );

        if (cancelled) {
          await database.closeAsync();
          return;
        }

        const history: Record<string, number> = {};

        rows.forEach((row) => {
          history[row.day] = row.learnedCount;
        });

        setLearnedToday(todayResult?.learnedCount ?? 0);
        setWeeklyProgress(history);
        setDb(database);
      } catch (error) {
        console.error("Error inicializando el progreso:", error);

        if (database && !cancelled) {
          await database.closeAsync().catch(() => {});
        }
      }
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  const incrementProgress = async () => {
    if (!db) return;

    const today = getToday();

    await db.runAsync(
      `INSERT INTO daily_progress (day, learnedCount)
       VALUES (?, 1)
       ON CONFLICT(day) DO UPDATE SET
         learnedCount = learnedCount + 1`,
      today,
    );

    const result = await db.getFirstAsync<{
      learnedCount: number;
    }>("SELECT learnedCount FROM daily_progress WHERE day = ?", today);

    const count = result?.learnedCount ?? 0;

    setLearnedToday(count);
    setWeeklyProgress((previous) => ({
      ...previous,
      [today]: count,
    }));
  };

  const resetProgress = async () => {
    if (!db) return;

    const today = getToday();

    await db.runAsync(
      `INSERT INTO daily_progress (day, learnedCount)
       VALUES (?, 0)
       ON CONFLICT(day) DO UPDATE SET
         learnedCount = 0`,
      today,
    );

    setLearnedToday(0);
    setWeeklyProgress((previous) => ({
      ...previous,
      [today]: 0,
    }));
  };

  const value = useMemo(
    () => ({
      learnedToday,
      progress: Math.min(learnedToday / DAILY_GOAL, 1),
      weeklyProgress,
      incrementProgress,
      resetProgress,
    }),
    [learnedToday, weeklyProgress, db],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);

  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }

  return ctx;
};
