import { useState } from 'react';
import { AttackValues } from '../types/calculator';

const INITIAL_VALUES: AttackValues = {
  characterAttack: 0,
  weaponAttack: 0,
  attackPercentage: 0,
  flatAttack: 0
};

export function useAttackCalculator() {
  const [values, setValues] = useState<AttackValues>(INITIAL_VALUES);
  const [totalAttack, setTotalAttack] = useState<number | null>(null);

  const handleInputChange = (field: keyof AttackValues, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleCalculate = () => {
    const baseAttack = values.characterAttack + values.weaponAttack;
    const extraAttack = (baseAttack * (values.attackPercentage / 100)) + values.flatAttack;
    const total = baseAttack + extraAttack;
    setTotalAttack(total);
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setTotalAttack(null);
  };

  return {
    values,
    totalAttack,
    handleInputChange,
    handleCalculate,
    handleReset
  };
}