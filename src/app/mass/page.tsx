'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Microscope, Activity, TrendingUp } from 'lucide-react';
import { MassChart } from '@/components/SensorCharts';

const massData = [
  { time: '00:00', weight: 400000 },
  { time: '06:00', weight: 600000 },
  { time: '12:00', weight: 850000 },
  { time: '18:00', weight: 1100000 },
  { time: '24:00', weight: 1248000 },
];

export default function MassPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8 pb-12">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Mass Measuring Devices</h1>
            <p className="text-gray-500 font-medium mt-1">Cumulative weight and growth analysis for current harvest cycles.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MassChart data={massData} title="Main Field Device 1" />
            <MassChart data={massData.map(d => ({ ...d, weight: d.weight * 0.8 }))} title="Secondary Processing Unit" />
          </div>

          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-10 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                <Microscope size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 tracking-tight">Yield Forecast Model</h4>
                <p className="text-gray-500 font-medium">Predicted yield: <span className="text-gray-900 font-bold">1,450 kg</span> (+12% vs last season)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Confidence Score</p>
                <p className="text-lg font-black text-emerald-600">94.2%</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <TrendingUp size={24} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
