import React from 'react';
import { SectionProps } from '../types/calculator';

export const Section: React.FC<SectionProps> = ({ 
  title, 
  field, 
  value, 
  suffix = '%', 
  onChange,
  helpLink 
}) => (
  <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {helpLink}
    </div>
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={value || ''}
        onChange={(e) => onChange(field, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
        placeholder="Enter value"
      />
      <span className="text-gray-700">{suffix}</span>
    </div>
  </div>
);