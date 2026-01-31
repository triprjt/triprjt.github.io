import React from 'react';

// --- TYPE DEFINITIONS ---
type TechItem = {
  id: string;
  label: string;
  type: 'text' | 'icon';
  color: {
    top: string;
    bottom: string;
    shadow: string;
  };
  iconPath?: React.ReactNode;
  text?: string;
};

// --- ASSET DATABASE (ICONS) ---
const ICONS = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white drop-shadow-md">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white drop-shadow-md">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white drop-shadow-md">
       <path d="M11.96 0c-2.333.003-4.48.243-5.405 1.89-.925 1.646-.356 3.13 1.914 3.46l.665.094.025 2.383-2.126.014c-3.193.018-5.32 1.31-5.912 3.864-.593 2.553.774 4.384 3.666 4.365h.92v-1.78c-.004-1.92.05-2.857 2.057-3.045 2.008-.188 3.535.132 3.535-2.17V5.535c0-1.996-1.616-2.583-3.95-2.583H6.848v.575h.584c2.815 0 2.86.136 2.86 1.637v.064h2.722v-.07c0-1.734-.14-3.15-1.054-3.158zM9.47 1.868h.02c.38.002.684.308.682.69-.002.38-.31.685-.692.682-.38-.002-.684-.308-.682-.69.002-.38.31-.685.692-.682zm-4.72 13.91h-.02c-.38-.002-.685-.31-.682-.692.002-.382.31-.686.692-.684.38.002.685.31.682.692-.002.383-.31.687-.692.684zm11.238-1.574l-.666-.095-.025-2.383 2.126-.014c3.193-.018 5.32-1.31 5.912-3.864.593-2.553-.774-4.384-3.666-4.365h-.92v1.78c.004 1.92-.05 2.857-2.057 3.045-2.008.188-3.535-.132-3.535 2.17v3.536c0 1.996 1.616 2.583 3.95 2.583h.49v-.575h-.583c-2.815 0-2.86-.136-2.86-1.637v-.064h-2.723v.07c0 1.734.14 3.15 1.054 3.158 2.333-.003 4.48-.243 5.405-1.89.925-1.646.356-3.13-1.914-3.46zm-2.555 5.86h-.02c-.38-.002-.684-.308-.682-.69.002-.38.31-.685.692-.682.38.002.684.308.682.69-.002.38-.31.685.692.682z"/>
    </svg>
  ),
};

// --- CONFIGURATION MATRIX ---
// The grid is a 3x3 matrix rotated 45 degrees. 
// We map the visual layout to this matrix.
// Row 1: SQL, HTML, Python
// Row 2: Java, TS, React
// Row 3: C++, Github, JS

const gridData: TechItem[] = [
  // ROW 1
  {
    id: 'sql',
    label: 'SQL',
    type: 'text',
    text: 'SQL',
    color: { top: '#FB923C', bottom: '#EA580C', shadow: '#9A3412' } // Orange
  },
  {
    id: 'html',
    label: 'HTML',
    type: 'text',
    text: 'HTML',
    color: { top: '#4ADE80', bottom: '#22C55E', shadow: '#15803D' } // Green
  },
  {
    id: 'python',
    label: 'Python',
    type: 'icon',
    iconPath: ICONS.python,
    color: { top: '#67E8F9', bottom: '#06B6D4', shadow: '#0E7490' } // Cyan/Blue
  },
  // ROW 2
  {
    id: 'java',
    label: 'Java',
    type: 'text',
    text: 'Java',
    color: { top: '#C084FC', bottom: '#9333EA', shadow: '#6B21A8' } // Purple
  },
  {
    id: 'ts',
    label: 'TS',
    type: 'text',
    text: 'TS',
    color: { top: '#F472B6', bottom: '#DB2777', shadow: '#BE185D' } // Pink/Magenta
  },
  {
    id: 'react',
    label: 'React',
    type: 'icon',
    iconPath: ICONS.react,
    color: { top: '#A78BFA', bottom: '#7C3AED', shadow: '#5B21B6' } // Lilac/Purple
  },
  // ROW 3
  {
    id: 'cpp',
    label: 'C++',
    type: 'text',
    text: 'C++',
    color: { top: '#22D3EE', bottom: '#0891B2', shadow: '#155E75' } // Cyan
  },
  {
    id: 'github',
    label: 'Github',
    type: 'icon',
    iconPath: ICONS.github,
    color: { top: '#34D399', bottom: '#059669', shadow: '#065F46' } // Mint
  },
  {
    id: 'js',
    label: 'JS',
    type: 'text',
    text: 'JS',
    color: { top: '#FACC15', bottom: '#EAB308', shadow: '#A16207' } // Yellow
  },
];

const IsoBlock = ({ item }: { item: TechItem }) => {
  return (
    <div className="relative w-12 h-12 sm:w-18 sm:h-18 transition-transform duration-300">
      {/* SHADOW BASE (The 3D thickness) */}
      <div
        className="absolute inset-0 rounded-[20px] translate-x-3 translate-y-3"
        style={{
          backgroundColor: item.color.shadow,
          boxShadow: `0 0 40px ${item.color.shadow}80` // Glow effect
        }}
      />
      
      {/* MID LAYER (Extrusion gradient) */}
      <div
        className="absolute inset-0 rounded-[20px] translate-x-1.5 translate-y-1.5"
        style={{
          background: `linear-gradient(135deg, ${item.color.bottom}, ${item.color.shadow})`
        }}
      />

      {/* TOP FACE */}
      <div
        className="absolute inset-0 rounded-[20px] flex items-center justify-center border-t border-white/20"
        style={{
          background: `linear-gradient(135deg, ${item.color.top}, ${item.color.bottom})`,
        }}
      >
        {/* ICON CONTAINER - Counter-rotated to appear upright */}
        <div className="-rotate-45 transform">
          {item.type === 'text' ? (
            <span className="text-white font-bold text-2xl sm:text-3xl tracking-wider drop-shadow-md font-sans">
              {item.text}
            </span>
          ) : (
            <div className="transform scale-110">
              {item.iconPath}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function TechStackGrid() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10 overflow-visible">
      
      {/* 
        GRID CONTAINER 
        1. Grid Layout: 3x3
        2. Rotation: 45deg to create the diamond shape
      */}
      <div className="h-fit grid grid-cols-3 gap-8 sm:gap-18 transform rotate-45 p-10">
        {gridData.map((item) => (
          <IsoBlock key={item.id} item={item} />
        ))}
      </div>
      
    </div>
  );
}