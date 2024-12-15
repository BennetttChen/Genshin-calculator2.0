import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Calculator } from './components/Calculator';
import { AttackCalculator } from './components/AttackCalculator';
import { CritCalculator } from './components/CritCalculator';
import { CalculatorProvider } from './context/CalculatorContext';

export default function App() {
  return (
    <BrowserRouter>
      <CalculatorProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Calculator />} />
            <Route path="attack" element={<AttackCalculator />} />
            <Route path="crit" element={<CritCalculator />} />
          </Route>
        </Routes>
      </CalculatorProvider>
    </BrowserRouter>
  );
}