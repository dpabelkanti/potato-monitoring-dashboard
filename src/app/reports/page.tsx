'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { FileText, Download, Share2, Filter, Search } from 'lucide-react';

const reports = [
  { id: 'REP-001', name: 'Yield Analysis Q1', type: 'PDF', date: '2024-04-01', size: '2.4 MB' },
  { id: 'REP-002', name: 'Sensor Health Log', type: 'CSV', date: '2024-03-28', size: '124 KB' },
  { id: 'REP-003', name: 'Soil Moisture Trends', type: 'XLSX', date: '2024-03-25', size: '1.2 MB' },
  { id: 'REP-004', name: 'Camera Feed Summary', type: 'PDF', date: '2024-03-20', size: '4.8 MB' },
];

export default function ReportsPage() {
  const handleDownload = (report: any) => {
    // Simulate generating and downloading a file
    const content = `This is the dummy content for ${report.name} (${report.id}). Generated on ${new Date().toLocaleDateString()}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Choose appropriate extension
    const ext = report.type.toLowerCase();
    link.href = url;
    link.download = `${report.name.replace(/\s+/g, '_')}_${report.date}.${ext}`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">System Reports</h1>
              <p className="text-gray-500 font-medium mt-1">Access generated analytics, logs, and compliance documentation.</p>
            </div>
            <div className="flex gap-3">
              <div className="relative group">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--primary)] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Find report..." 
                  className="bg-white border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-xs font-bold outline-none focus:ring-1 focus:ring-[var(--primary)] transition-all"
                />
              </div>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-black/10 transition-all hover:scale-105 active:scale-95">
                <Filter size={16} /> Filter Results
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-lg text-gray-800">Generated Reports</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-200 rounded-lg text-gray-500 transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg text-gray-500 transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/30 text-gray-400 text-[11px] font-black uppercase tracking-[0.1em]">
                    <th className="px-8 py-6">ID</th>
                    <th className="px-8 py-6">Report Name</th>
                    <th className="px-8 py-6">Format</th>
                    <th className="px-8 py-6">Date Created</th>
                    <th className="px-8 py-6">Size</th>
                    <th className="px-8 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50/80 transition-colors group">
                      <td className="px-8 py-5 text-sm font-bold text-gray-800">{report.id}</td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-gray-400" />
                          <span className="text-sm font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors">{report.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase ${report.type === 'PDF' ? 'bg-red-50 text-red-600' : report.type === 'CSV' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                          {report.type}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-sm font-medium text-gray-500">{report.date}</td>
                      <td className="px-8 py-5 text-sm font-medium text-gray-400">{report.size}</td>
                      <td className="px-8 py-5 text-right">
                        <button 
                          onClick={() => handleDownload(report)}
                          className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest hover:underline px-4 py-2 hover:bg-amber-50 rounded-xl transition-all"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
