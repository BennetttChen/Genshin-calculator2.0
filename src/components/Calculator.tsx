import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator as CalculatorIcon, RotateCcw } from 'lucide-react';
import { Section } from './Section';
import { DamageResult } from './DamageResult';
import { useCalculator } from '../hooks/useCalculator';

export function Calculator() {
  const {
    values,
    finalDamage,
    handleInputChange,
    handleCalculate,
    handleReset
  } = useCalculator();

  const attackHelpLink = (
    <Link 
      to="/attack" 
      className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
    >
      不知道如何计算攻击力?
    </Link>
  );

  const critHelpLink = (
    <Link 
      to="/crit" 
      className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
    >
      暴击收益
    </Link>
  );

  return (
    <div className="bg-white/40 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CalculatorIcon className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">原神伤害计算器</h1>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600/90 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          重置
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Section 
          title="攻击力" 
          field="attack" 
          value={values.attack} 
          suffix="" 
          onChange={handleInputChange}
          helpLink={attackHelpLink}
        />
        <Section title="倍率" field="multiplier" value={values.multiplier} onChange={handleInputChange} />
        <Section title="增伤" field="damageBonus" value={values.damageBonus} onChange={handleInputChange} />
        <Section 
          title="暴击率" 
          field="critRate" 
          value={values.critRate} 
          onChange={handleInputChange}
          helpLink={critHelpLink}
        />
        <Section title="暴击伤害" field="critDamage" value={values.critDamage} onChange={handleInputChange} />
        <Section title="反应倍率" field="reaction" value={values.reaction} suffix="x" onChange={handleInputChange} />
        <Section title="防御减免" field="defense" value={values.defense} onChange={handleInputChange} />
        <Section title="抗性" field="resistance" value={values.resistance} onChange={handleInputChange} />
      </div>

      <div className="flex flex-col items-center gap-6 mb-6">
        <button
          onClick={handleCalculate}
          className="px-8 py-3 bg-indigo-600/90 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl active:transform active:scale-95"
        >
          计算伤害
        </button>
        
        <DamageResult damage={finalDamage} />
      </div>

      <div className="text-right text-sm flex flex-col items-end gap-1 mt-8">
        <p>所有数据理论及计算方式</p>
        <p>来自米游社白猫大人</p>
        <p>《伤害乘区论》</p>
        <a 
          href="https://www.miyoushe.com/ys/accountCenter/postList?id=159074312" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-white transition-colors underline"
        >
          白猫大人
        </a>
      </div>
    </div>
  );
}