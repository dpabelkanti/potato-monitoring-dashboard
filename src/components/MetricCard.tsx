'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: string;
  trendValue?: string;
  statusColor?: string;
  subtitle?: string;
}

export function MetricCard({ 
  title, 
  value, 
  unit = '', 
  icon: Icon, 
  trend, 
  trendValue, 
  statusColor = '[var(--primary)]',
  subtitle
}: MetricCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 flex items-start gap-5 hover:shadow-xl hover:shadow-black/5 transition-all group"
    >
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/10 transition-transform group-hover:scale-110"
        style={{ backgroundColor: statusColor }}
      >
        <Icon size={28} />
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-extrabold text-gray-900 tabular-nums">{value}</h3>
          {unit && <span className="text-gray-400 font-bold text-lg">{unit}</span>}
        </div>
        
        {subtitle && (
          <p className="text-xs text-gray-400 font-medium mt-1">{subtitle}</p>
        )}

        {trend && (
          <div className="mt-3 flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}%
            </span>
            <span className="text-xs text-gray-400 font-medium">vs last hour</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
