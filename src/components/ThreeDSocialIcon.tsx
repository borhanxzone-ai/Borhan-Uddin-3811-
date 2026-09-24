import React from 'react';

interface ThreeDIconProps {
  className?: string;
  size?: number | string;
}

/**
 * 3D WhatsApp Icon with volumetric lighting, specular gloss reflection, and drop shadow.
 */
export const ThreeDWhatsAppIcon: React.FC<ThreeDIconProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        {/* Outer 3D Body Gradient */}
        <linearGradient id="wa-bg-3d" x1="12" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="30%" stopColor="#22C55E" />
          <stop offset="70%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        {/* Top Rim Gloss Light */}
        <linearGradient id="wa-rim-gloss" x1="32" y1="4" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Bottom Ambient Shadow */}
        <linearGradient id="wa-bot-shadow" x1="32" y1="44" x2="32" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#052e16" stopOpacity="0" />
          <stop offset="100%" stopColor="#052e16" stopOpacity="0.45" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="wa-shadow" x="-10%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#15803D" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        {/* Inner glyph shadow */}
        <filter id="glyph-depth" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#047857" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* 3D Base Squircle / Rounded Body */}
      <rect
        x="6"
        y="5"
        width="52"
        height="52"
        rx="16"
        fill="url(#wa-bg-3d)"
        filter="url(#wa-shadow)"
      />

      {/* Top Gloss Cap */}
      <path
        d="M 22 5 L 42 5 C 50.8 5 58 12.2 58 21 C 58 26 48 30 32 30 C 16 30 6 26 6 21 C 6 12.2 13.2 5 22 5 Z"
        fill="url(#wa-rim-gloss)"
      />

      {/* Bottom Shadow Depth Curve */}
      <path
        d="M 6 43 C 6 50.8 13.2 57 22 57 L 42 57 C 50.8 57 58 50.8 58 43 C 50 48 40 50 32 50 C 24 50 14 48 6 43 Z"
        fill="url(#wa-bot-shadow)"
      />

      {/* Inner Fine Specular Rim */}
      <rect
        x="7"
        y="6"
        width="50"
        height="50"
        rx="15"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1"
        fill="none"
      />

      {/* WhatsApp Speech Bubble & Phone Glyph */}
      <g filter="url(#glyph-depth)">
        <path
          d="M32 17C23.716 17 17 23.716 17 32C17 34.876 17.81 37.562 19.213 39.845L18 46L24.373 44.825C26.586 46.216 29.202 47 32 47C40.284 47 47 40.284 47 32C47 23.716 40.284 17 32 17ZM39.516 38.384C39.208 39.252 37.986 39.96 37.042 40.152C36.398 40.282 35.56 40.386 32.724 39.21C29.098 37.708 26.758 34.024 26.576 33.782C26.4 33.54 25.1 31.814 25.1 30.026C25.1 28.238 26.012 27.368 26.376 26.996C26.684 26.684 27.188 26.544 27.678 26.544C27.836 26.544 27.978 26.552 28.106 26.558C28.484 26.574 28.674 26.598 28.924 27.196C29.232 27.94 29.988 29.79 30.08 29.978C30.174 30.166 30.266 30.42 30.144 30.666C30.024 30.916 29.92 31.026 29.736 31.238C29.552 31.45 29.378 31.616 29.194 31.84C29.026 32.034 28.842 32.24 29.052 32.602C29.262 32.964 29.986 34.148 31.054 35.1C32.434 36.33 33.558 36.726 33.964 36.894C34.272 37.022 34.64 36.992 34.864 36.752C35.15 36.442 35.504 35.934 35.864 35.43C36.12 35.072 36.446 35.026 36.782 35.15C37.124 35.272 38.944 36.17 39.318 36.356C39.692 36.542 39.94 36.634 40.032 36.794C40.126 36.954 40.126 37.72 39.818 38.384Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Glass glint dot */}
      <circle cx="16" cy="14" r="2.5" fill="#FFFFFF" fillOpacity="0.6" />
    </svg>
  );
};

/**
 * 3D Facebook Icon with dimensional cobalt blue gradient, beveled curves, and raised "f" glyph.
 */
export const ThreeDFacebookIcon: React.FC<ThreeDIconProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        {/* 3D Blue Base Gradient */}
        <linearGradient id="fb-bg-3d" x1="12" y1="5" x2="52" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="35%" stopColor="#2563EB" />
          <stop offset="70%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>

        {/* Top Rim Gloss */}
        <linearGradient id="fb-rim-gloss" x1="32" y1="5" x2="32" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Bottom Shadow */}
        <linearGradient id="fb-bot-shadow" x1="32" y1="45" x2="32" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.5" />
        </linearGradient>

        {/* Drop shadow */}
        <filter id="fb-shadow" x="-10%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1D4ED8" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        <filter id="fb-f-depth" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#172554" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* 3D Base Squircle */}
      <rect
        x="6"
        y="5"
        width="52"
        height="52"
        rx="16"
        fill="url(#fb-bg-3d)"
        filter="url(#fb-shadow)"
      />

      {/* Top Gloss Cap */}
      <path
        d="M 22 5 L 42 5 C 50.8 5 58 12.2 58 21 C 58 26 48 30 32 30 C 16 30 6 26 6 21 C 6 12.2 13.2 5 22 5 Z"
        fill="url(#fb-rim-gloss)"
      />

      {/* Bottom Ambient Shadow */}
      <path
        d="M 6 43 C 6 50.8 13.2 57 22 57 L 42 57 C 50.8 57 58 50.8 58 43 C 50 48 40 50 32 50 C 24 50 14 48 6 43 Z"
        fill="url(#fb-bot-shadow)"
      />

      {/* Fine inner specular border */}
      <rect
        x="7"
        y="6"
        width="50"
        height="50"
        rx="15"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1"
        fill="none"
      />

      {/* Iconic 3D Facebook 'f' */}
      <g filter="url(#fb-f-depth)">
        <path
          d="M37.5 32.5H33.2V48H26.8V32.5H23.8V27H26.8V23.4C26.8 20.3 28.6 18 32.6 18C34.5 18 36.1 18.2 36.1 18.2L35.7 23.3C35.7 23.3 34.3 23.2 33.1 23.2C31.8 23.2 31.4 23.9 31.4 25.1V27H36.9L37.5 32.5Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Glass glint highlight */}
      <circle cx="16" cy="14" r="2.5" fill="#FFFFFF" fillOpacity="0.65" />
    </svg>
  );
};

/**
 * 3D YouTube Icon with luscious ruby-red depth, top gloss bevel, and raised white play button.
 */
export const ThreeDYouTubeIcon: React.FC<ThreeDIconProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        {/* 3D Ruby Gradient */}
        <linearGradient id="yt-bg-3d" x1="12" y1="5" x2="52" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF4B4B" />
          <stop offset="28%" stopColor="#FF0000" />
          <stop offset="70%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>

        {/* Top Rim Gloss */}
        <linearGradient id="yt-rim-gloss" x1="32" y1="5" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Bottom Shadow */}
        <linearGradient id="yt-bot-shadow" x1="32" y1="44" x2="32" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#450a0a" stopOpacity="0" />
          <stop offset="100%" stopColor="#450a0a" stopOpacity="0.55" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="yt-shadow" x="-10%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#DC2626" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        <filter id="yt-triangle-depth" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#7f1d1d" floodOpacity="0.65" />
        </filter>
      </defs>

      {/* 3D Base Body */}
      <rect
        x="6"
        y="7"
        width="52"
        height="50"
        rx="16"
        fill="url(#yt-bg-3d)"
        filter="url(#yt-shadow)"
      />

      {/* Top Gloss Curve */}
      <path
        d="M 22 7 L 42 7 C 50.8 7 58 13.8 58 22 C 58 27 48 30 32 30 C 16 30 6 27 6 22 C 6 13.8 13.2 7 22 7 Z"
        fill="url(#yt-rim-gloss)"
      />

      {/* Bottom Shadow Curve */}
      <path
        d="M 6 42 C 6 49.5 13.2 57 22 57 L 42 57 C 50.8 57 58 49.5 58 42 C 50 47 40 49 32 49 C 24 49 14 47 6 42 Z"
        fill="url(#yt-bot-shadow)"
      />

      {/* Fine inner specular border */}
      <rect
        x="7"
        y="8"
        width="50"
        height="48"
        rx="15"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1"
        fill="none"
      />

      {/* 3D Raised White Play Triangle */}
      <g filter="url(#yt-triangle-depth)">
        <path
          d="M27.2 24.5C26.4 24.0 25.5 24.5 25.5 25.5V38.5C25.5 39.5 26.4 40.0 27.2 39.5L39.8 33.2C40.6 32.8 40.6 31.7 39.8 31.3L27.2 24.5Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Specular glint */}
      <circle cx="16" cy="15" r="2.5" fill="#FFFFFF" fillOpacity="0.7" />
    </svg>
  );
};

/**
 * 3D Instagram Icon with rich sunset radial-linear blend, dimensional camera housing, and specular highlights.
 */
export const ThreeDInstagramIcon: React.FC<ThreeDIconProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        {/* Instagram 3D Multi-Stop Sunset Gradient */}
        <radialGradient id="ig-sunset-1" cx="20%" cy="105%" r="110%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="20%" stopColor="#F97316" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="80%" stopColor="#C026D3" />
          <stop offset="100%" stopColor="#4F46E5" />
        </radialGradient>

        <linearGradient id="ig-top-glint" x1="10" y1="5" x2="54" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ig-bot-shadow" x1="32" y1="44" x2="32" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.55" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="ig-shadow" x="-10%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#E11D48" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        <filter id="ig-cam-depth" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#701a75" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* 3D Base Squircle */}
      <rect
        x="6"
        y="5"
        width="52"
        height="52"
        rx="16"
        fill="url(#ig-sunset-1)"
        filter="url(#ig-shadow)"
      />

      {/* Top Rim Glass Gloss */}
      <path
        d="M 22 5 L 42 5 C 50.8 5 58 12.2 58 21 C 58 26 48 30 32 30 C 16 30 6 26 6 21 C 6 12.2 13.2 5 22 5 Z"
        fill="url(#ig-top-glint)"
      />

      {/* Bottom Shadow Curve */}
      <path
        d="M 6 43 C 6 50.8 13.2 57 22 57 L 42 57 C 50.8 57 58 50.8 58 43 C 50 48 40 50 32 50 C 24 50 14 48 6 43 Z"
        fill="url(#ig-bot-shadow)"
      />

      {/* Fine inner specular border */}
      <rect
        x="7"
        y="6"
        width="50"
        height="50"
        rx="15"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1"
        fill="none"
      />

      {/* Camera Body and Lens Glyph with 3D Emboss */}
      <g filter="url(#ig-cam-depth)">
        {/* Camera outer rounded frame */}
        <rect
          x="19"
          y="18"
          width="26"
          height="26"
          rx="7.5"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          fill="none"
        />
        {/* Center lens circle */}
        <circle
          cx="32"
          cy="31"
          r="6.5"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          fill="none"
        />
        {/* Flash dot */}
        <circle
          cx="39.5"
          cy="23.5"
          r="1.8"
          fill="#FFFFFF"
        />
      </g>

      {/* Top-left specular glint */}
      <circle cx="16" cy="14" r="2.5" fill="#FFFFFF" fillOpacity="0.75" />
    </svg>
  );
};

/**
 * 3D Behance Icon with sleek cobalt finish and embossed 'Bē' glyph.
 */
export const ThreeDBehanceIcon: React.FC<ThreeDIconProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="be-bg-3d" x1="12" y1="5" x2="52" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="35%" stopColor="#1D4ED8" />
          <stop offset="70%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>

        <linearGradient id="be-top-glint" x1="32" y1="5" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <filter id="be-shadow" x="-10%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1E40AF" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        <filter id="be-glyph-depth" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#0f172a" floodOpacity="0.6" />
        </filter>
      </defs>

      <rect
        x="6"
        y="5"
        width="52"
        height="52"
        rx="16"
        fill="url(#be-bg-3d)"
        filter="url(#be-shadow)"
      />

      <path
        d="M 22 5 L 42 5 C 50.8 5 58 12.2 58 21 C 58 26 48 30 32 30 C 16 30 6 26 6 21 C 6 12.2 13.2 5 22 5 Z"
        fill="url(#be-top-glint)"
      />

      <rect
        x="7"
        y="6"
        width="50"
        height="50"
        rx="15"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1"
        fill="none"
      />

      <g filter="url(#be-glyph-depth)" fill="#FFFFFF">
        {/* Letter 'B' */}
        <path d="M22 23H28.5C31 23 32.5 24 32.5 26C32.5 27.5 31.5 28.5 30 29C32 29.5 33 31 33 33C33 35.5 31 37 28.5 37H22V23ZM25.5 26.5V28.5H28C29 28.5 29.5 28 29.5 27.5C29.5 27 29 26.5 28 26.5H25.5ZM25.5 31.5V34H28.5C29.5 34 30 33.5 30 32.5C30 32 29.5 31.5 28.5 31.5H25.5Z" />
        {/* Bar over 'e' */}
        <rect x="36" y="24.5" width="7" height="2" rx="1" />
        {/* Letter 'e' */}
        <path d="M39.5 28C36.8 28 35 29.8 35 32.5C35 35.2 36.8 37 39.5 37C41.8 37 43 35.8 43.5 34H41.2C41 34.6 40.4 35.1 39.5 35.1C38.2 35.1 37.3 34.2 37.2 33H43.8C43.8 32.8 43.8 32.5 43.8 32.2C43.8 29.7 42.1 28 39.5 28ZM37.3 31.2C37.5 30.2 38.3 29.6 39.4 29.6C40.5 29.6 41.3 30.2 41.5 31.2H37.3Z" />
      </g>

      <circle cx="16" cy="14" r="2.5" fill="#FFFFFF" fillOpacity="0.65" />
    </svg>
  );
};
