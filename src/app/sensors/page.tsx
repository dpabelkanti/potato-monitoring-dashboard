'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Zap, Signal, Battery, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  { id: 'S-001', name: 'Field Alpha', status: 'Online', signal: 92, battery: 85 },
  { id: 'S-002', name: 'Field Beta', status: 'Online', signal: 88, battery: 74 },
  { id: 'S-003', name: 'North Border', status: 'Offline', signal: 0, battery: 12 },
  { id: 'S-004', name: 'South Border', status: 'Online', signal: 95, battery: 98 },
  { id: 'S-005', name: 'Irrigation Zone', status: 'Online', signal: 84, battery: 65 },
  { id: 'S-006', name: 'Greenhouse A', status: 'Online', signal: 99, battery: 100 },
];

export default function SensorsPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Sensor Module Status</h1>
            <p className="text-gray-500 font-medium mt-1">Real-time health and connectivity monitoring for all field modules.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((module) => (
              <motion.div 
                key={module.id}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${module.status === 'Online' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    <Zap size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${module.status === 'Online' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {module.status.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{module.name}</h3>
                <p className="text-sm text-gray-400 font-medium mb-6">ID: {module.id}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                      <Signal size={16} /> Signal Strength
                    </div>
                    <span className="text-sm font-bold text-gray-800">{module.signal}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-1000" 
                      style={{ width: `${module.signal}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                      <Battery size={16} /> Battery Level
                    </div>
                    <span className="text-sm font-bold text-gray-800">{module.battery}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`${module.battery < 20 ? 'bg-red-500' : 'bg-green-500'} h-full transition-all duration-1000`} 
                      style={{ width: `${module.battery}%` }}
                    />
                  </div>
                </div>
                
                <button className="w-full mt-8 py-3 bg-gray-50 hover:bg-gray-100 rounded-2xl text-sm font-bold text-gray-600 transition-colors border border-gray-100">
                  Detailed Diagnostics
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
