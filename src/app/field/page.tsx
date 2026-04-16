'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { MapPin, Navigation, Compass, Layers } from 'lucide-react';

export default function FieldPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Field Test View</h1>
              <p className="text-gray-500 font-medium mt-1">Geospatial monitoring and field-level environmental data.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 shadow-sm">
                <Layers size={16} /> Terrain Mode
              </button>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-black/10">
                <Navigation size={16} /> GPS Sync
              </button>
            </div>
          </div>

          <div className="bg-white border-4 border-gray-100 rounded-[3rem] aspect-[21/9] overflow-hidden relative shadow-2xl shadow-black/5 group">
            {/* Mock Map View */}
            <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 opacity-20">
                <MapPin size={64} className="text-gray-900" />
                <p className="text-xl font-black uppercase tracking-[0.2em] text-gray-900">Map Interface Placeholder</p>
              </div>
              
              {/* Field Markers */}
              <div className="absolute top-1/4 left-1/3 group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-6 h-6 bg-[var(--primary)] rounded-full border-4 border-white shadow-lg animate-bounce" />
                <div className="mt-2 bg-white px-3 py-1.5 rounded-lg shadow-xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-900">PLOT A-1</p>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-2/3 group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-bounce delay-150" />
                <div className="mt-2 bg-white px-3 py-1.5 rounded-lg shadow-xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-900">PLOT B-2</p>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-600 shadow-lg border border-gray-50 hover:bg-gray-50 transition-colors">
                <Compass size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-10 inset-x-10 p-8 bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-2xl flex items-center justify-between">
              <div className="flex gap-10">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Active Plot</p>
                  <p className="text-lg font-black text-gray-900">Potato North Site A</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Current Temp</p>
                  <p className="text-lg font-black text-gray-900">24.2 °C</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Soil Moisture</p>
                  <p className="text-lg font-black text-gray-900">72%</p>
                </div>
              </div>
              <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-amber-500/20">
                View Site Details
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
