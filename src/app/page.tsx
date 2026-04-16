'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { MetricCard } from '@/components/MetricCard';
import { UltrasonicChart, MassChart } from '@/components/SensorCharts';
import { 
  TrendingUp, 
  Cpu, 
  Activity, 
  AlertCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  // Static data for pure frontend demonstration
  const data = {
    totalYield: '1,248',
    activeDevices: { total: 7, online: 6, offline: 1 },
    sensorStatus: { active: 6, total: 7 },
    ultrasonicData: [
      { time: '00:00', distance: 28 },
      { time: '04:00', distance: 32 },
      { time: '08:00', distance: 25 },
      { time: '12:00', distance: 35 },
      { time: '16:00', distance: 30 },
      { time: '20:00', distance: 33 },
      { time: '24:00', distance: 29 },
    ],
    massData: [
      { time: '00:00', weight: 400000 },
      { time: '06:00', weight: 600000 },
      { time: '12:00', weight: 850000 },
      { time: '18:00', weight: 1100000 },
      { time: '24:00', weight: 1248000 },
    ]
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        
        <div className="p-8 max-w-[1600px] mx-auto space-y-8 pb-12">
          {/* Main Title Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-black text-gray-900 tracking-tight"
              >
                Operational Overview
              </motion.h1>
              <p className="text-gray-500 font-medium mt-2">Real-time potato yield and device monitoring from primary sensor arrays.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-2xl text-[11px] font-bold text-gray-600 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                DATABASE CONNECTED
              </span>
              <button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-6 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-amber-500/20 transition-all active:scale-95">
                Export Data
              </button>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Total Yield" 
              value={data.totalYield}
              unit="kg"
              icon={TrendingUp}
              trend="up"
              trendValue="2.4"
              statusColor="var(--chart-2)"
              subtitle="Current harvest estimate"
            />
            <MetricCard 
              title="Active Devices" 
              value={data.activeDevices.total}
              icon={Cpu}
              statusColor="var(--chart-1)"
              subtitle={`${data.activeDevices.online} Online, ${data.activeDevices.offline} Offline`}
            />
            <MetricCard 
              title="Sensor module status" 
              value={`${data.sensorStatus.active}/${data.sensorStatus.total}`}
              icon={Activity}
              statusColor="var(--success)"
              subtitle="Active modules across the field"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UltrasonicChart 
              data={data.ultrasonicData} 
              title="Ultrasonic sensor array 1 data" 
            />
            <MassChart 
              data={data.massData} 
              title="Mass measuring device - cumulative weight" 
            />
          </div>

          {/* Alert Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[var(--sidebar-background)] rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-2xl shadow-black/10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[100px]" />
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-14 h-14 bg-amber-510/20 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20">
                <AlertCircle size={28} />
              </div>
              <div className="max-w-md">
                <h4 className="font-bold text-xl mb-1">System Performance Check</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Sensor array 3 requires calibration. Automated re-tuning in 12h. Maintenance crew has been notified.</p>
              </div>
            </div>
            <button className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-2xl text-sm font-bold transition-all border border-white/10 hover:scale-105 active:scale-95 whitespace-nowrap">
              Review System Alerts
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
