'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Camera, Maximize2, Pause, Play, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const cameraFeeds = [
  { id: 'CAM-01', name: 'Field Entry East', area: 'Plot A-1', status: 'Active' },
  { id: 'CAM-02', name: 'Irrigation Zone', area: 'Plot B-2', status: 'Active' },
  { id: 'CAM-03', name: 'Greenhouse North', area: 'Plot C-1', status: 'Inactive' },
  { id: 'CAM-04', name: 'Processing Unit', area: 'Main Shed', status: 'Active' },
];

export default function CamerasPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8 pb-12">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">RGB Camera Monitoring</h1>
            <p className="text-gray-500 font-medium mt-1">Visual field inspection and growth monitoring feeds.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {cameraFeeds.map((feed) => (
              <motion.div 
                key={feed.id}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                      <Camera size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 leading-none mb-1">{feed.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{feed.area} • {feed.id}</p>
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-2xl text-[10px] font-black tracking-widest uppercase border ${feed.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                    {feed.status}
                  </div>
                </div>

                <div className="relative aspect-video bg-gray-900 rounded-[1.5rem] overflow-hidden group mb-6 border-4 border-gray-100">
                  {/* Mock Camera Feed Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Pause size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Maximize2 size={18} />
                      </button>
                    </div>
                    <div className="text-white text-[10px] font-mono opacity-80">
                      LIVE • LATENCY: 240ms
                    </div>
                  </div>
                  
                  {/* Placeholder Content */}
                  <div className="w-full h-full flex items-center justify-center flex-col gap-3">
                    <Camera size={48} className="text-white/10" />
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Feed Placeholder</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button className="flex-1 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl text-xs font-bold transition-all shadow-lg shadow-black/10">
                    View Recording History
                  </button>
                  <button className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 transition-all">
                    <Settings size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
