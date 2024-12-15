export interface DamageValues {
  attack: number;
  multiplier: number;
  damageBonus: number;
  critRate: number;
  critDamage: number;
  reaction: number;
  defense: number;
  resistance: number;
}

export interface AttackValues {
  characterAttack: number;
  weaponAttack: number;
  attackPercentage: number;
  flatAttack: number;
}

export interface CritValues {
  critRate: number;
  critDamage: number;
}

export interface SectionProps {
  title: string;
  field: keyof (DamageValues | AttackValues | CritValues);
  value: number;
  suffix?: string;
  onChange: (field: keyof (DamageValues | AttackValues | CritValues), value: string) => void;
  helpLink?: React.ReactNode;
}