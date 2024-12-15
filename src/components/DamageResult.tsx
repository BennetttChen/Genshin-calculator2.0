import React from 'react';

interface DamageResultProps {
  damage: number | null;
  title?: string;
  showDecimals?: boolean;
}

export const DamageResult: React.FC<DamageResultProps> = ({ 
  damage, 
  title = "最终伤害",
  showDecimals = false 
}) => (
  <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="text-4xl font-bold text-indigo-600">
      {damage === null ? '---' : 
        showDecimals ? 
          damage.toFixed(2) : 
          Math.round(damage).toLocaleString()
      }
    </div>
  </div>
);