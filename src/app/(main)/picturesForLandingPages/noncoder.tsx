import React from 'react';

const NonCoderGraphic = () => {
  return (
    <div className="min-h-[500px] w-full bg-[#050505] flex items-center justify-center overflow-hidden perspective-1000">
      
      {/* 
        The Isometric Scene Wrapper 
        rotate-x-60 and rotate-z-45 creates the standard isometric floor perspective
      */}
      <div className="relative transform rotate-x-[60deg] rotate-z-[-45deg] hover:rotate-z-[-40deg] transition-all duration-700 ease-in-out">
        
        {/* ==============================
            1. LEFT BRACE (The Orange One)
           ============================== */}
        <div className="absolute -left-[140px] -top-[50px] w-[100px] h-[200px] z-20 animate-float-slow">
          {/* Shadow/Thickness Layer (The "Side" of the 3D object) */}
          <BraceShape color="#EA580C" className="absolute top-4 left-4 opacity-100" isRight={false} />
           {/* Middle Filler to close gap if viewed from extreme angles */}
          <BraceShape color="#F97316" className="absolute top-2 left-2" isRight={true} />
          {/* Top Face Layer (Gradient) */}
          <div className="absolute top-0 left-0 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
             <svg width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M90 0C60 0 60 30 60 60V80C60 95 50 100 30 100C50 100 60 105 60 120V140C60 170 60 200 90 200H100V180C80 180 80 160 80 140V120C80 90 90 90 100 90V110C90 110 80 110 80 80V60C80 40 80 20 100 20V0H90Z" 
                  fill="url(#brace-gradient-left)"
                />
                <defs>
                  <linearGradient id="brace-gradient-left" x1="0" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDBA74" /> {/* Light Orange */}
                    <stop offset="1" stopColor="#EC4899" /> {/* Pink */}
                  </linearGradient>
                </defs>
            </svg>
          </div>
        </div>

        {/* ==============================
            2. RIGHT BRACE (The Pink One)
           ============================== */}
        <div className="absolute -right-[40px] -top-[50px] w-[100px] h-[200px] z-20 animate-float-slow-delay">
          {/* Thickness */}
          <BraceShape color="#EA580C" isRight className="absolute top-4 left-4" />
          <BraceShape color="#F97316" isRight={true} className="absolute top-2 left-2" />
          {/* Face */}
          <div className="absolute top-0 left-0 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            <svg width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Flipped Path for Right Brace */}
                <path 
                  d="M10 0C40 0 40 30 40 60V80C40 95 50 100 70 100C50 100 40 105 40 120V140C40 170 40 200 10 200H0V180C20 180 20 160 20 140V120C20 90 10 90 0 90V110C10 110 20 110 20 80V60C20 40 20 20 0 20V0H10Z" 
                  fill="url(#brace-gradient-right)"
                />
                <defs>
                  <linearGradient id="brace-gradient-right" x1="0" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDBA74" /> 
                    <stop offset="1" stopColor="#EC4899" /> 
                  </linearGradient>
                </defs>
            </svg>
          </div>
        </div>

        {/* ==============================
            3. CENTER CARDS (Glass Stack)
           ============================== */}
        <div className="absolute left-[-20px] top-[20px] w-[140px] h-[140px] z-10">
            
            {/* Layer 1: Bottom Blue Card */}
            <div className="absolute inset-0 bg-blue-600 rounded-xl transform translate-x-4 translate-y-4 opacity-60 blur-[1px]" />
            
            {/* Layer 2: Middle Purple Card */}
            <div 
                className="absolute inset-0 bg-indigo-500 rounded-xl shadow-lg border border-white/10"
                style={{ transform: 'translateZ(20px)' }} // Lift it up
            />

            {/* Layer 3: Top Glass Code Card */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-purple-600/80 backdrop-blur-md rounded-xl border-t border-l border-white/30 shadow-2xl flex flex-col p-4"
                style={{ 
                    transform: 'translateZ(50px) translate(-10px, -10px)', // Lift higher and offset
                    boxShadow: '20px 20px 40px rgba(0,0,0,0.5)'
                }}
            >
                {/* Code Lines UI */}
                <div className="w-8 h-1 bg-white/50 rounded-full mb-3" />
                <div className="space-y-2">
                    <div className="w-full h-1 bg-white/30 rounded-full" />
                    <div className="w-[70%] h-1 bg-white/30 rounded-full" />
                    <div className="w-[85%] h-1 bg-white/30 rounded-full" />
                    <div className="w-[60%] h-1 bg-white/30 rounded-full" />
                    <div className="w-[90%] h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mt-2" />
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl pointer-events-none" />
            </div>
        </div>

        {/* ==============================
            4. THE BOOKS (Bottom Stack)
           ============================== */}
        <div className="absolute left-[-50px] bottom-[-140px] z-30">
            {/* Book 1 (Bottom) */}
            <div 
                className="relative w-28 h-32 bg-[#34D399] rounded-lg"
                style={{ boxShadow: '10px 10px 0px #059669' }} // Dark Green Shadow = Thickness
            >
                {/* Pages side (White line) */}
                <div className="absolute bottom-2 left-[-2px] w-full h-3 bg-white/20 rounded-sm" />
            </div>

            {/* Book 2 (Top) */}
            <div 
                className="relative w-28 h-32 bg-[#6EE7B7] rounded-lg -mt-[100px] -ml-[15px]"
                style={{ 
                    boxShadow: '10px 10px 0px #10B981', // Darker Green Thickness
                    transform: 'translateZ(30px)' 
                }} 
            >
                {/* Red Bookmark */}
                <div className="absolute top-0 right-6 w-4 h-full bg-red-400/80" />
                {/* Pages side */}
                <div className="absolute bottom-3 left-[-2px] w-full h-4 bg-white/40 rounded-sm" />
                <div className="absolute bottom-1 left-[-2px] w-full h-1 bg-white/30 rounded-sm" />
            </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateZ(0px); }
          50% { transform: translateZ(15px); }
        }
        @keyframes float-slow-delay {
          0%, 100% { transform: translateZ(15px); }
          50% { transform: translateZ(0px); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-slow-delay { animation: float-slow-delay 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

// Helper SVG component for the thick "Body" of the braces
const BraceShape = ({ color, className, isRight }: { color: string, className: string, isRight: boolean }) => (
  <svg 
    width="100" 
    height="200" 
    viewBox="0 0 100 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d={isRight 
        ? "M10 0C40 0 40 30 40 60V80C40 95 50 100 70 100C50 100 40 105 40 120V140C40 170 40 200 10 200H0V180C20 180 20 160 20 140V120C20 90 10 90 0 90V110C10 110 20 110 20 80V60C20 40 20 20 0 20V0H10Z"
        : "M90 0C60 0 60 30 60 60V80C60 95 50 100 30 100C50 100 60 105 60 120V140C60 170 60 200 90 200H100V180C80 180 80 160 80 140V120C80 90 90 90 100 90V110C90 110 80 110 80 80V60C80 40 80 20 100 20V0H90Z"
      }
      fill={color}
    />
  </svg>
);

export default NonCoderGraphic;