'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Settings, User, Bell, Shield, BellRing, Smartphone, Globe, Save, Check, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // States for Security and Profile
  const [email, setEmail] = useState('admin@cropsdoctor.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Feedback states
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    // Load saved email on mount
    const savedEmail = localStorage.getItem('adminEmail');
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleSaveProfile = () => {
    localStorage.setItem('adminEmail', email);
    showToast('Profile updated successfully!');
  };

  const handleSaveSecurity = () => {
    const savedPassword = localStorage.getItem('adminPassword') || 'admin123';
    
    if (currentPassword !== savedPassword) {
      showToast('Error: Current password is incorrect.');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      showToast('Error: New passwords do not match.');
      return;
    }
    
    if (newPassword.length < 5) {
      showToast('Error: Password too short.');
      return;
    }

    localStorage.setItem('adminPassword', newPassword);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    showToast('Password updated successfully!');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Account Profile', icon: User, color: 'text-indigo-600' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: 'text-amber-500' },
    { id: 'security', label: 'Security & Privacy', icon: Shield, color: 'text-green-600' },
    { id: 'sync', label: 'Device Sync', icon: Smartphone, color: 'text-blue-500' },
    { id: 'language', label: 'Language & Region', icon: Globe, color: 'text-purple-500' },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto relative">
        
        {/* Simple Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -20, x: '-50%' }}
              className={`fixed top-8 left-1/2 z-50 px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 ${toastMessage.includes('Error') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
            >
              {toastMessage.includes('Error') ? null : <Check size={16} />}
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <Header />
        <div className="p-8 max-w-[1200px] mx-auto space-y-8 pb-20">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">System Settings</h1>
            <p className="text-gray-500 font-medium mt-1">Manage monitoring preferences, account security, and device alerts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-2">
              {tabs.map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-lg active:scale-[0.98]' : 'hover:bg-white/50 text-gray-400'}`}
                >
                  <tab.icon size={18} className={activeTab === tab.id ? tab.color : 'text-gray-400'} /> {tab.label}
                </button>
              ))}
            </div>

            <div className="md:col-span-2 space-y-8">
              <motion.div 
                key={activeTab} // Using key to trigger re-animation on tab change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-200 rounded-[2.5rem] p-10 shadow-sm"
              >
                {activeTab === 'profile' && (
                  <>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 border-2 border-dashed border-indigo-100">
                        <User size={32} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Profile Information</h3>
                        <p className="text-sm text-gray-400 font-medium">Update your administrative details.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="space-y-2 col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address (Username)</label>
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold text-gray-800 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <button onClick={handleSaveProfile} className="w-full mt-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-3 shadow-lg shadow-black/10 transition-all active:scale-[0.98]">
                      <Save size={18} /> Save Profile Settings
                    </button>
                  </>
                )}

                {activeTab === 'notifications' && (
                  <>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-500">
                        <Bell size={32} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Notification Preferences</h3>
                        <p className="text-sm text-gray-400 font-medium">Control how and when you are alerted.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl">
                        <div>
                          <h5 className="font-bold text-gray-900 text-sm">Hardware Failure Alerts</h5>
                          <p className="text-xs text-gray-400 font-medium mt-1">Receive immediate notifications if a sensor goes offline.</p>
                        </div>
                        <div className="w-12 h-6 bg-[var(--primary)] rounded-full relative p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-1" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl">
                        <div>
                          <h5 className="font-bold text-gray-900 text-sm">System Updates</h5>
                          <p className="text-xs text-gray-400 font-medium mt-1">Notifications about software updates and maintenance.</p>
                        </div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute left-1" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'security' && (
                  <>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center text-green-600">
                        <Shield size={32} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Security & Privacy</h3>
                        <p className="text-sm text-gray-400 font-medium">Change your login password.</p>
                      </div>
                    </div>

                    <div className="space-y-6 mb-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Current Password</label>
                        <input 
                          type="password" 
                          placeholder="Enter current password" 
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold text-gray-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all shadow-sm"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">New Password</label>
                          <input 
                            type="password" 
                            placeholder="New password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)} 
                            className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold text-gray-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all shadow-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Confirm Password</label>
                          <input 
                            type="password" 
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold text-gray-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <button onClick={handleSaveSecurity} className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 transition-all active:scale-[0.98]">
                      <Lock size={18} /> Update Password
                    </button>
                  </>
                )}

                {activeTab === 'sync' && (
                  <>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-500">
                        <Smartphone size={32} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Device Synchronization</h3>
                        <p className="text-sm text-gray-400 font-medium">Control how frontend syncs with sensor APIs.</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Dashboard Refresh Interval</label>
                        <select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-800 focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all appearance-none">
                          <option>Every 1 minute (Recommended)</option>
                          <option>Every 5 minutes</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'language' && (
                  <>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-600">
                        <Globe size={32} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Language & Region</h3>
                        <p className="text-sm text-gray-400 font-medium">Customize your dashboard locale.</p>
                      </div>
                    </div>
                  </>
                )}

              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
