'use client';

export default function WaveDivider({ flip = false, color = '#0F172A' }) {
  return (
    <div className={`relative h-16 md:h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
          fill={color}
          fillOpacity="0.3"
        />
        <path
          d="M0,70 C360,110 720,30 1080,70 C1260,90 1380,60 1440,70 L1440,100 L0,100 Z"
          fill={color}
          fillOpacity="0.5"
        />
      </svg>
    </div>
  );
}
