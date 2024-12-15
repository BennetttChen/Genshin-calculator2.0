import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator as CalculatorIcon, RotateCcw } from 'lucide-react';
import { Section } from './Section';
import { DamageResult } from './DamageResult';
import { useAttackCalculator } from '../hooks/useAttackCalculator';
import { useCalculatorContext } from '../context/CalculatorContext';

export function AttackCalculator() {
  const navigate = useNavigate();
  const { setGlobalValues } = useCalculatorContext();
  const {
    values,
    totalAttack,
    handleInputChange,
    handleCalculate,
    handleReset
  } = useAttackCalculator();

  const handleApply = () => {
    if (totalAttack !== null) {
      setGlobalValues(prev => ({
        ...prev,
        attack: Math.round(totalAttack)
      }));
      navigate('/');
    }
  };

  return (
    <div className="bg-white/40 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-indigo-600" />
          </Link>
          <CalculatorIcon className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">攻击力计算器</h1>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600/90 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          重置
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Section 
          title="人物攻击力" 
          field="characterAttack" 
          value={values.characterAttack} 
          suffix="" 
          onChange={handleInputChange}
        />
        <Section 
          title="武器攻击力" 
          field="weaponAttack" 
          value={values.weaponAttack} 
          suffix="" 
          onChange={handleInputChange}
        />
        <Section 
          title="百分比攻击力" 
          field="attackPercentage" 
          value={values.attackPercentage} 
          suffix="%" 
          onChange={handleInputChange}
        />
        <Section 
          title="固定攻击力" 
          field="flatAttack" 
          value={values.flatAttack} 
          suffix="" 
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          onClick={handleCalculate}
          className="px-8 py-3 bg-indigo-600/90 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl active:transform active:scale-95"
        >
          计算攻击力
        </button>
        
        <div className="flex items-center gap-4">
          <DamageResult damage={totalAttack} title="总攻击力" />
          {totalAttack !== null && (
            <button
              onClick={handleApply}
              className="text-indigo-600 hover:text-indigo-800 hover:underline font-semibold"
            >
              应用到主界面
            </button>
          )}
        </div>
      </div>
    </div>
  );
}