import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator as CalculatorIcon, RotateCcw } from 'lucide-react';
import { Section } from './Section';
import { DamageResult } from './DamageResult';
import { useCritCalculator } from '../hooks/useCritCalculator';

export function CritCalculator() {
  const {
    values,
    critValue,
    handleInputChange,
    handleCalculate,
    handleReset
  } = useCritCalculator();

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
          <h1 className="text-3xl font-bold text-gray-800">暴击收益计算器</h1>
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
          title="暴击率" 
          field="critRate" 
          value={values.critRate} 
          suffix="%" 
          onChange={handleInputChange}
        />
        <Section 
          title="暴击伤害" 
          field="critDamage" 
          value={values.critDamage} 
          suffix="%" 
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col items-center gap-6 mb-6">
        <button
          onClick={handleCalculate}
          className="px-8 py-3 bg-indigo-600/90 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl active:transform active:scale-95"
        >
          计算收益
        </button>
        
        <DamageResult damage={critValue} title="暴击收益" showDecimals={true} />
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <p className="font-semibold">说明：</p>
        <p>当你不知道怎么分配暴击率还是暴击伤害时，可以考虑暴击收益。</p>
        <p>暴击期望越高，更容易获得更多的收益。</p>
      </div>
    </div>
  );
}