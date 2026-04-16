'use client';

import React, { useState, useEffect } from 'react';
import { User, Bell, Search, Settings } from 'lucide-react';

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    };
    return date.toLocaleString('en-US', options);
  };

  return (
    <header className="h-20 bg-white/60 backdrop-blur-md border-b border-gray-200/50 flex items-center justify-between px-8 sticky top-0 z-40 transition-shadow duration-300">
      <div className="flex-1 max-w-sm">
        <div className="relative group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--primary)] transition-colors" />
          <input 
            type="text" 
            placeholder="Search monitoring..." 
            className="w-full bg-gray-100/50 hover:bg-gray-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[var(--primary)] transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Potato yield monitoring</h2>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">Real-time Dashboard</p>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6 text-right">
        <div className="hidden lg:block border-r border-gray-200 pr-4">
          <p className="text-sm font-medium text-gray-800">{time.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p className="text-xs text-gray-500 font-mono">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group">
            <Bell size={20} className="text-gray-500 group-hover:text-[var(--primary)]" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-2 group cursor-pointer hover:bg-gray-100/80 px-3 py-1.5 rounded-xl transition-all">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Pabel kanti dey</p>
              <p className="text-[10px] text-gray-500 font-medium">Administrator</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center text-gray-600 border border-white shadow-sm ring-1 ring-black/5">
              <User size={22} className="opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
