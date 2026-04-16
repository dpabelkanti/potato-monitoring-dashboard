'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, LayoutDashboard, Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // For demonstration, fetch credentials from localStorage if they have been changed in settings
    const savedEmail = localStorage.getItem('adminEmail') || 'admin@cropsdoctor.com';
    const savedPassword = localStorage.getItem('adminPassword') || 'admin123';

    if (email === savedEmail && password === savedPassword) {
      // Set a mock cookie for auth
      document.cookie = "auth-token=potato-secure-token; path=/; max-age=86400"; // 1 day
      router.push('/');
    } else {
      setError(`Invalid credentials. Hint: ${savedEmail} / ${savedPassword}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-white font-sans overflow-hidden">
      
      {/* Left side: Premium Image / Branding area */}
      <div className="hidden lg:flex w-1/2 relative bg-gray-900 items-end justify-start p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/90 to-blue-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center z-0 opacity-50 mix-blend-overlay"
        />
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-10" />

        <div className="relative z-20 text-white max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center text-white border border-white/30">
              <LayoutDashboard size={28} />
            </div>
            <h1 className="font-extrabold text-2xl tracking-tight">Potato yield <span className="font-medium opacity-70">System</span></h1>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-black tracking-tight leading-tight mb-6"
          >
            Precision intelligence for modern potato farming.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-white/80 font-medium leading-relaxed"
          >
            Monitor mass measuring devices, ultrasonic sensor arrays, and RGB cameras in real-time to maximize yield and operational efficiency.
          </motion.p>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 lg:p-24 relative bg-gray-50/50">
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Welcome back</h2>
            <p className="text-gray-500 font-medium mt-2">Enter your credentials to access the dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-start gap-3 border border-red-100/50 text-sm font-medium"
              >
                <AlertCircle className="shrink-0 mt-0.5" size={18} />
                <p>{error}</p>
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cropsdoctor.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all outline-none text-gray-900 font-medium placeholder:text-gray-400 shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-sm font-bold text-[var(--primary)] hover:text-amber-700">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all outline-none text-gray-900 font-medium placeholder:text-gray-400 shadow-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-xl shadow-amber-500/20 active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm font-medium text-gray-500">
            Secure admin portal for authorized personnel only.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
