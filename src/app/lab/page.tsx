'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { FlaskConical, Beaker, FileCheck, AlertCircle } from 'lucide-react';

const tests = [
  { id: 'T-2024-001', module: 'Field Alpha', type: 'Soil Ph', result: '6.4', status: 'Passed', date: '2024-04-01' },
  { id: 'T-2024-002', module: 'Field Beta', type: 'Nutrients', result: 'Stable', status: 'Passed', date: '2024-04-03' },
  { id: 'T-2024-003', module: 'Greenhouse A', type: 'Moisture', result: '84%', status: 'Passed', date: '2024-04-05' },
];

export default function LabPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Lab Test View</h1>
            <p className="text-gray-500 font-medium mt-1">Analysis results and quality control metrics from laboratory testing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical size={24} />
              </div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Tests</h4>
              <p className="text-3xl font-black text-gray-900">124</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck size={24} />
              </div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Completed</h4>
              <p className="text-3xl font-black text-gray-900">118</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle size={24} />
              </div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">In Review</h4>
              <p className="text-3xl font-black text-gray-900">6</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 border-b border-gray-100">
              <h3 className="font-bold text-xl text-gray-900">Recent Test Results</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <th className="px-8 py-5">Test ID</th>
                    <th className="px-8 py-5">Module</th>
                    <th className="px-8 py-5">Type</th>
                    <th className="px-8 py-5">Result</th>
                    <th className="px-8 py-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tests.map((test) => (
                    <tr key={test.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-4 text-sm font-bold text-gray-800">{test.id}</td>
                      <td className="px-8 py-4 text-sm font-medium text-gray-500">{test.module}</td>
                      <td className="px-8 py-4 text-sm font-medium text-gray-500">{test.type}</td>
                      <td className="px-8 py-4 text-sm font-bold text-blue-600">{test.result}</td>
                      <td className="px-8 py-4">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">Passed</span>
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
