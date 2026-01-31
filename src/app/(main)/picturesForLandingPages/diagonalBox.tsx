import React from 'react';
import { Play, FileText } from 'lucide-react';

const DiagonalBox = () => {
  return (
    // CHANGED: Removed 'overflow-hidden' and 'p-20' which was causing clipping and sizing issues.
    // Added 'h-[400px]' to reserve space for the rotated object.
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-visible">
      
      {/* 
         Master Container with Isometric Projection 
      */}
      <div className="relative transform rotate-x-[55deg] rotate-z-[-45deg] hover:rotate-z-[-42deg] transition-all duration-700 ease-in-out">
        
        {/* --- 1. The Phone/Tablet Device --- */}
        <div 
          className="relative w-[280px] h-[520px] rounded-[40px] bg-gradient-to-br from-pink-400 via-fuchsia-500 to-violet-600 z-10"
          style={{
            boxShadow: '30px 30px 0px rgba(167, 139, 250, 1), -20px 20px 40px rgba(0,0,0,0.5)' 
          }}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent rounded-[40px] pointer-events-none" />
        </div>

        {/* --- 2. The Glass Card Overlay --- */}
        <div 
          className="absolute top-[100px] -left-[60px] w-[340px] h-[240px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 z-20 flex flex-col p-6 shadow-2xl"
          style={{
            transform: 'translateZ(40px) translateY(-20px)',
            boxShadow: '20px 20px 30px rgba(0,0,0,0.3)'
          }}
        >
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-white font-bold text-lg tracking-wide">Arrays</h3>
              <p className="text-white/60 text-[10px] font-medium mt-1">23 lectures - 1hr 19 min</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center group">
              <div className="h-1.5 w-24 bg-white/80 rounded-full" />
              <span className="text-[8px] text-white/80 font-mono">00:31</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-1.5 w-32 bg-white/60 rounded-full" />
              <span className="text-[8px] text-white/60 font-mono">03:35</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-1.5 w-20 bg-white/50 rounded-full" />
              <span className="text-[8px] text-white/60 font-mono">05:46</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-1.5 w-28 bg-white/40 rounded-full" />
              <span className="text-[8px] text-white/60 font-mono">01:34</span>
            </div>
             <div className="flex justify-between items-center">
              <div className="h-1.5 w-16 bg-white/30 rounded-full" />
              <span className="text-[8px] text-white/60 font-mono">03:03</span>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
        </div>

        {/* --- 3. Floating Icon (Bottom Left) --- */}
        <div 
          className="absolute -bottom-[20px] -left-[80px] w-20 h-20 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-2xl flex items-center justify-center z-30 animate-bounce-slow"
          style={{
             boxShadow: '15px 15px 0px rgba(52, 211, 153, 0.6), 0 20px 20px rgba(0,0,0,0.3)'
          }}
        >
          <div className="bg-white/90 w-8 h-8 rounded-full flex items-center justify-center pl-1 shadow-inner">
            <Play size={14} className="text-teal-500 fill-teal-500" />
          </div>
        </div>

        {/* --- 4. Floating Icon (Top Right) --- */}
        <div 
          className="absolute -top-[40px] -right-[60px] w-20 h-20 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-2xl flex items-center justify-center z-0"
          style={{
             boxShadow: '15px 15px 0px rgba(52, 211, 153, 0.6), 0 20px 20px rgba(0,0,0,0.3)'
          }}
        >
           <FileText size={32} className="text-white drop-shadow-md" />
        </div>

      </div>
    </div>
  );
};

export default DiagonalBox;