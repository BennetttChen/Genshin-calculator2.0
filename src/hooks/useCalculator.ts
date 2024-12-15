import { useState } from 'react';
import { DamageValues } from '../types/calculator';
import { calculateDamage } from '../utils/damageCalculator';
import { useCalculatorContext, INITIAL_VALUES } from '../context/CalculatorContext';

export function useCalculator() {
  const { globalValues, setGlobalValues } = useCalculatorContext();
  const [finalDamage, setFinalDamage] = useState<number | null>(null);

  const handleInputChange = (field: keyof DamageValues, value: string) => {
    setGlobalValues(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleCalculate = () => {
    const damage = calculateDamage(globalValues);
    setFinalDamage(damage);
  };

  const handleReset = () => {
    setGlobalValues(INITIAL_VALUES);
    setFinalDamage(null);
  };

  return {
    values: globalValues,
    finalDamage,
    handleInputChange,
    handleCalculate,
    handleReset
  };
}