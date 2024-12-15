import { DamageValues } from '../types/calculator';

export const calculateDamage = (values: DamageValues): number => {
  const base = values.attack * (values.multiplier / 100);
  const dmgBonus = 1 + (values.damageBonus / 100);
  const crit = 1 + ((values.critRate / 100) * (values.critDamage / 100));
  const defMultiplier = 1 - (values.defense / 100);
  const resMultiplier = 1 - (values.resistance / 100);
  
  return base * dmgBonus * crit * values.reaction * defMultiplier * resMultiplier;
};