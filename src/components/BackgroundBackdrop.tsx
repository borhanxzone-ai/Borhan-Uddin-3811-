import React from 'react';

type RGBType = 'red' | 'green' | 'blue' | 'cyan' | 'purple' | 'amber';

interface Bubble {
  id: number;
  size: number;
  top: string;
  left: string;
  animation: string;
  duration?: string;
  delay?: string;
  type: RGBType;
}

const RGB_CONFIG: Record<
  RGBType,
  {
    bg: string;
    border: string;
    shadow: string;
    glow: string;
  }
> = {
  red: {
    bg: 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 50, 95, 0.45) 28%, rgba(255, 20, 70, 0.1) 68%, transparent 100%)',
    border: '1px solid rgba(255, 60, 100, 0.55)',
    shadow: 'inset 0 0 7px rgba(255, 60, 100, 0.45), 0 0 12px rgba(255, 50, 95, 0.35)',
    glow: 'rgba(255, 50, 95, 0.25)',
  },
  green: {
    bg: 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.65) 0%, rgba(10, 240, 140, 0.45) 28%, rgba(0, 200, 100, 0.1) 68%, transparent 100%)',
    border: '1px solid rgba(16, 230, 140, 0.55)',
    shadow: 'inset 0 0 7px rgba(16, 230, 140, 0.45), 0 0 12px rgba(10, 240, 140, 0.35)',
    glow: 'rgba(10, 240, 140, 0.25)',
  },
  blue: {
    bg: 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.65) 0%, rgba(30, 144, 255, 0.48) 28%, rgba(0, 100, 255, 0.1) 68%, transparent 100%)',
    border: '1px solid rgba(60, 160, 255, 0.55)',
    shadow: 'inset 0 0 7px rgba(30, 144, 255, 0.45), 0 0 12px rgba(30, 144, 255, 0.35)',
    glow: 'rgba(30, 144, 255, 0.25)',
  },
  cyan: {
    bg: 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.65) 0%, rgba(0, 240, 255, 0.45) 28%, rgba(0, 180, 220, 0.1) 68%, transparent 100%)',
    border: '1px solid rgba(0, 240, 255, 0.55)',
    shadow: 'inset 0 0 7px rgba(0, 240, 255, 0.45), 0 0 12px rgba(0, 240, 255, 0.35)',
    glow: 'rgba(0, 240, 255, 0.25)',
  },
  purple: {
    bg: 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.65) 0%, rgba(185, 75, 255, 0.45) 28%, rgba(140, 40, 220, 0.1) 68%, transparent 100%)',
    border: '1px solid rgba(195, 85, 255, 0.55)',
    shadow: 'inset 0 0 7px rgba(185, 75, 255, 0.45), 0 0 12px rgba(185, 75, 255, 0.35)',
    glow: 'rgba(185, 75, 255, 0.25)',
  },
  amber: {
    bg: 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 175, 20, 0.45) 28%, rgba(240, 140, 0, 0.1) 68%, transparent 100%)',
    border: '1px solid rgba(255, 185, 30, 0.55)',
    shadow: 'inset 0 0 7px rgba(255, 175, 20, 0.45), 0 0 12px rgba(255, 175, 20, 0.35)',
    glow: 'rgba(255, 175, 20, 0.25)',
  },
};

// Small sizes (14px - 36px) distributed across screen
const BUBBLES: Bubble[] = [
  // Top region
  { id: 1, size: 24, top: '8%', left: '10%', animation: 'animate-bubble-1', duration: '18s', delay: '0s', type: 'red' },
  { id: 2, size: 18, top: '15%', left: '28%', animation: 'animate-bubble-2', duration: '21s', delay: '-3s', type: 'green' },
  { id: 3, size: 30, top: '9%', left: '55%', animation: 'animate-bubble-3', duration: '23s', delay: '-6s', type: 'blue' },
  { id: 4, size: 20, top: '18%', left: '78%', animation: 'animate-bubble-4', duration: '19s', delay: '-2s', type: 'cyan' },
  { id: 5, size: 15, top: '6%', left: '88%', animation: 'animate-bubble-1', duration: '16s', delay: '-8s', type: 'purple' },

  // Upper-middle region
  { id: 6, size: 28, top: '32%', left: '6%', animation: 'animate-bubble-2', duration: '20s', delay: '-4s', type: 'cyan' },
  { id: 7, size: 22, top: '28%', left: '44%', animation: 'animate-bubble-4', duration: '17s', delay: '-7s', type: 'red' },
  { id: 8, size: 34, top: '36%', left: '85%', animation: 'animate-bubble-3', duration: '22s', delay: '-5s', type: 'green' },
  { id: 9, size: 16, top: '42%', left: '22%', animation: 'animate-bubble-1', duration: '18s', delay: '-9s', type: 'blue' },

  // Lower-middle region
  { id: 10, size: 26, top: '56%', left: '12%', animation: 'animate-bubble-3', duration: '24s', delay: '-1s', type: 'purple' },
  { id: 11, size: 18, top: '52%', left: '38%', animation: 'animate-bubble-2', duration: '19s', delay: '-6s', type: 'amber' },
  { id: 12, size: 32, top: '60%', left: '72%', animation: 'animate-bubble-4', duration: '21s', delay: '-4s', type: 'red' },
  { id: 13, size: 20, top: '68%', left: '92%', animation: 'animate-bubble-1', duration: '17s', delay: '-11s', type: 'blue' },
  { id: 14, size: 15, top: '64%', left: '50%', animation: 'animate-bubble-2', duration: '22s', delay: '-8s', type: 'green' },

  // Bottom region
  { id: 15, size: 25, top: '80%', left: '18%', animation: 'animate-bubble-4', duration: '20s', delay: '-5s', type: 'cyan' },
  { id: 16, size: 22, top: '86%', left: '35%', animation: 'animate-bubble-1', duration: '18s', delay: '-3s', type: 'red' },
  { id: 17, size: 36, top: '78%', left: '60%', animation: 'animate-bubble-3', duration: '25s', delay: '-10s', type: 'purple' },
  { id: 18, size: 18, top: '90%', left: '82%', animation: 'animate-bubble-2', duration: '16s', delay: '-7s', type: 'amber' },
  { id: 19, size: 14, top: '84%', left: '95%', animation: 'animate-bubble-4', duration: '19s', delay: '-2s', type: 'green' },
];

export const BackgroundBackdrop: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#16161A]"
      style={{
        backgroundColor: '#16161A',
      }}
      aria-hidden="true"
    >
      {/* 1. Subtle fine tech grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Delicate RGB Ambient Glows in corners for vibrancy */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-red-500/[0.04] rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] bg-blue-500/[0.04] rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 left-1/4 w-[380px] h-[380px] bg-emerald-500/[0.035] rounded-full blur-[140px]" />

      {/* 3. Small Animated RGB Bubbles */}
      {BUBBLES.map((b) => {
        const config = RGB_CONFIG[b.type];
        return (
          <div
            key={b.id}
            className={`absolute rounded-full will-change-transform ${b.animation}`}
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              top: b.top,
              left: b.left,
              animationDuration: b.duration,
              animationDelay: b.delay,
              background: config.bg,
              border: config.border,
              boxShadow: config.shadow,
              backdropFilter: 'blur(1px)',
            }}
          >
            {/* 3D Bubble Specular Glint Highlight */}
            <span
              className="absolute top-[18%] left-[22%] rounded-full bg-white/70 blur-[0.3px]"
              style={{
                width: `${Math.max(b.size * 0.22, 3)}px`,
                height: `${Math.max(b.size * 0.14, 2)}px`,
                transform: 'rotate(-30deg)',
              }}
            />
            {/* Micro second reflection */}
            <span
              className="absolute bottom-[20%] right-[22%] rounded-full bg-white/30 blur-[0.5px]"
              style={{
                width: `${Math.max(b.size * 0.12, 2)}px`,
                height: `${Math.max(b.size * 0.12, 2)}px`,
              }}
            />
          </div>
        );
      })}

      {/* 4. Rising Micro RGB Bubbles */}
      <div
        className="absolute rounded-full animate-bubble-rise will-change-transform"
        style={{
          width: '14px',
          height: '14px',
          left: '18%',
          animationDuration: '24s',
          animationDelay: '-2s',
          background: RGB_CONFIG.red.bg,
          border: RGB_CONFIG.red.border,
          boxShadow: RGB_CONFIG.red.shadow,
        }}
      />
      <div
        className="absolute rounded-full animate-bubble-rise will-change-transform"
        style={{
          width: '18px',
          height: '18px',
          left: '46%',
          animationDuration: '27s',
          animationDelay: '-12s',
          background: RGB_CONFIG.green.bg,
          border: RGB_CONFIG.green.border,
          boxShadow: RGB_CONFIG.green.shadow,
        }}
      />
      <div
        className="absolute rounded-full animate-bubble-rise will-change-transform"
        style={{
          width: '16px',
          height: '16px',
          left: '74%',
          animationDuration: '23s',
          animationDelay: '-6s',
          background: RGB_CONFIG.blue.bg,
          border: RGB_CONFIG.blue.border,
          boxShadow: RGB_CONFIG.blue.shadow,
        }}
      />
      <div
        className="absolute rounded-full animate-bubble-rise will-change-transform"
        style={{
          width: '13px',
          height: '13px',
          left: '86%',
          animationDuration: '29s',
          animationDelay: '-18s',
          background: RGB_CONFIG.purple.bg,
          border: RGB_CONFIG.purple.border,
          boxShadow: RGB_CONFIG.purple.shadow,
        }}
      />
    </div>
  );
};



