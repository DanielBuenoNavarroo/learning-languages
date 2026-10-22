import React, { createContext, useContext, useMemo, useState } from "react";

type ProgressContextType = {
  progress: number; // 0 a 1
  setProgress: (value: number) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [progress, setProgressState] = useState(0);

  const value = useMemo(
    () => ({
      progress,
      setProgress: (v: number) => setProgressState(Math.max(0, Math.min(1, v))),
      resetProgress: () => setProgressState(0),
    }),
    [progress]
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