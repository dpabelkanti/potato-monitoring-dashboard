'use client';

import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

interface ChartProps {
  data: any[];
  title: string;
}

export function UltrasonicChart({ data, title }: ChartProps) {
  return (
    <div className="glass-card p-6 h-[350px] flex flex-col group">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-bold text-gray-800 text-lg tracking-tight group-hover:text-[var(--primary)] transition-colors">{title}</h3>
          <p className="text-xs text-gray-400 font-medium">Distance measurement (cm)</p>
        </div>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[var(--chart-1)] ring-4 ring-blue-100" />
          <span className="w-3 h-3 rounded-full bg-[var(--chart-2)] ring-4 ring-emerald-100" />
        </div>
      </div>
      
      <div className="flex-1 w-full -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} 
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                padding: '12px'
              }}
              labelStyle={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}
            />
            <Line 
              key="distance-line"
              type="monotone" 
              dataKey="distance" 
              stroke="url(#lineGradient)" 
              strokeWidth={4} 
              dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
              activeDot={{ r: 6, strokeWidth: 0, fill: '#2563eb' }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MassChart({ data, title }: ChartProps) {
  return (
    <div className="glass-card p-6 h-[350px] flex flex-col group">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-bold text-gray-800 text-lg tracking-tight group-hover:text-[var(--primary)] transition-colors">{title}</h3>
          <p className="text-xs text-gray-400 font-medium">Cumulative weight (g)</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-emerald-50 rounded-lg border border-emerald-100">
            <span className="text-[10px] font-bold text-emerald-600 tracking-wider">LIVE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
              dx={-10}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                padding: '12px'
              }}
              formatter={(value: any) => [`${value.toLocaleString()} g`, 'Weight']}
            />
            <Area 
              key="weight-area"
              type="monotone" 
              dataKey="weight" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorWeight)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
