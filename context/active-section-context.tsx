'use client';
import React, { createContext, useContext, useState } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeofLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeofLastClick, setTimeOfLastClick] = useState(0);

  const value = {
    activeSection,
    setActiveSection,
    timeofLastClick,
    setTimeOfLastClick,
  };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'UseActiveSevtionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
}
