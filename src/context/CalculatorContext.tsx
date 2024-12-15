import React, { createContext, useContext, useState } from 'react';
import { DamageValues } from '../types/calculator';

interface CalculatorContextType {
  globalValues: DamageValues;
  setGlobalValues: React.Dispatch<React.SetStateAction<DamageValues>>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const INITIAL_VALUES: DamageValues = {
  attack: 0,
  multiplier: 0,
  damageBonus: 0,
  critRate: 0,
  critDamage: 0,
  reaction: 1,
  defense: 0,
  resistance: 10
};

export function CalculatorProvider({ children }: { children: React.ReactNode }) {
  const [globalValues, setGlobalValues] = useState<DamageValues>(INITIAL_VALUES);

  return (
    <CalculatorContext.Provider value={{ globalValues, setGlobalValues }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculatorContext must be used within a CalculatorProvider');
  }
  return context;
}