'use client';

import { MotionConfig, useReducedMotion } from 'framer-motion';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type MotionContextValue = {
  motionEnabled: boolean;
  toggleMotion: () => void;
};

const MotionContext = createContext<MotionContextValue | undefined>(undefined);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      setMotionEnabled(false);
    }
  }, [prefersReducedMotion]);

  const value = useMemo(
    () => ({
      motionEnabled,
      toggleMotion: () => setMotionEnabled((prev) => !prev)
    }),
    [motionEnabled]
  );

  return (
    <MotionContext.Provider value={value}>
      <MotionConfig reducedMotion={motionEnabled ? 'never' : 'always'}>{children}</MotionConfig>
    </MotionContext.Provider>
  );
}

export function useMotionSettings() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotionSettings must be used within MotionProvider');
  }
  return context;
}
