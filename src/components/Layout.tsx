import React from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url("/images/background.jpg")',
        imageRendering: 'crisp-edges'
      }}
    >
      <div className="min-h-screen backdrop-blur-[1px] bg-black/20">
        <div className="max-w-4xl mx-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}