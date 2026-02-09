'use client';

export const LetsTalkButton = () => {
  return (
    <button 
      onClick={() => window.open('https://cal.com/tripathirajat', '_blank')} 
      className="cta-button-header hidden md:block cursor-pointer"
    >
      Let&apos;s talk
    </button>
  );
};
