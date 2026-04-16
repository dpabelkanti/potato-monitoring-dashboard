'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Database, Filter, Download } from 'lucide-react';
import { UltrasonicChart } from '@/components/SensorCharts';

const chartData = [
  { time: '00:00', distance: 28 },
  { time: '04:00', distance: 32 },
  { time: '08:00', distance: 25 },
  { time: '12:00', distance: 35 },
  { time: '16:00', distance: 30 },
  { time: '20:00', distance: 33 },
  { time: '24:00', distance: 29 },
];

export default function UltrasonicPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Ultrasonic Sensor Arrays</h1>
              <p className="text-gray-500 font-medium mt-1">Detailed distance and depth metrics across multiple fields.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                <Filter size={16} /> Filter Array
              </button>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-800 transition-all">
                <Download size={16} /> Export CSV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <UltrasonicChart data={chartData} title="Sensor Array 1 (North Field)" />
            <UltrasonicChart data={chartData.map(d => ({ ...d, distance: d.distance + 5 }))} title="Sensor Array 2 (South Field)" />
            <UltrasonicChart data={chartData.map(d => ({ ...d, distance: d.distance - 2 }))} title="Sensor Array 3 (East Plot)" />
            <UltrasonicChart data={chartData.map(d => ({ ...d, distance: d.distance + 8 }))} title="Sensor Array 4 (West Plot)" />
          </div>
        </div>
      </main>
    </div>
  );
}
