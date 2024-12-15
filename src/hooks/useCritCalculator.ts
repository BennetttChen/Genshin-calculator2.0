import { useState } from 'react';
import { CritValues } from '../types/calculator';

const INITIAL_VALUES: CritValues = {
  critRate: 0,
  critDamage: 0
};

export function useCritCalculator() {
  const [values, setValues] = useState<CritValues>(INITIAL_VALUES);
  const [critValue, setCritValue] = useState<number | null>(null);

  const handleInputChange = (field: keyof CritValues, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleCalculate = () => {
    const rate = values.critRate / 100;
    const damage = values.critDamage / 100;
    const value = 1 + (rate * damage);
    setCritValue(value);
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setCritValue(null);
  };

  return {
    values,
    critValue,
    handleInputChange,
    handleCalculate,
    handleReset
  };
}