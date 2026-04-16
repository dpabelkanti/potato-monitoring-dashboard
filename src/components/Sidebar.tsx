'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Settings, 
  Database, 
  Camera, 
  Microscope, 
  MapPin, 
  FileText, 
  ChevronRight,
  Zap,
  LogOut
} from 'lucide-react';

interface SidebarProps {}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { id: 'sensors', label: 'Sensor module', icon: Zap, href: '/sensors', hasSubmenu: true },
  { id: 'cameras', label: 'RGB cameras', icon: Camera, href: '/cameras', hasSubmenu: true },
  { id: 'ultrasonic', label: 'Ultrasonic sensor arrays', icon: Database, href: '/ultrasonic', hasSubmenu: true },
  { id: 'mass', label: 'Mass measuring device', icon: Microscope, href: '/mass' },
  { id: 'lab', label: 'Lab test view', icon: Microscope, href: '/lab' },
  { id: 'field', label: 'Field test view', icon: MapPin, href: '/field' },
  { id: 'reports', label: 'Reports', icon: FileText, href: '/reports' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)] p-4 flex flex-col z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
          <LayoutDashboard size={24} />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight text-white">Potato yield</h1>
          <p className="text-xs text-gray-500 font-medium">System v1.0</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.id} 
              href={item.href}
              className={`sidebar-item ${isActive ? 'active shadow-lg shadow-amber-500/10' : 'text-gray-400 opacity-80 hover:opacity-100 hover:scale-[1.02]'}`}
            >
              <item.icon size={20} />
              <span className="flex-1 text-sm font-medium">{item.label}</span>
              {item.hasSubmenu && <ChevronRight size={16} className={`opacity-50 transition-transform ${isActive ? 'rotate-90' : ''}`} />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800/10 px-2 space-y-4">
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            <span className="text-xs font-semibold text-gray-400">System Online</span>
          </div>
        </div>

        <button 
          onClick={() => {
            document.cookie = "auth-token=; path=/; max-age=0;"; // Delete cookie
            window.location.href = '/login';
          }}
          className="w-full flex items-center justify-between text-gray-400 hover:text-white bg-white/5 hover:bg-red-500/10 rounded-xl p-3 border border-transparent hover:border-red-500/20 transition-all font-medium text-sm group"
        >
          <div className="flex items-center gap-2">
            <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
            <span>Sign out</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
