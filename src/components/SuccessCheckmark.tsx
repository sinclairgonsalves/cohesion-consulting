import React from 'react';

interface SuccessCheckmarkProps {
  size?: 'sm' | 'md' | 'lg';
}

export const SuccessCheckmark: React.FC<SuccessCheckmarkProps> = ({ size = 'md' }) => {
  const dimensions = {
    sm: { container: 'w-12 h-12', svg: 'w-6 h-6', strokeCircle: '2', strokeCheck: '3' },
    md: { container: 'w-16 h-16', svg: 'w-8 h-8', strokeCircle: '2.5', strokeCheck: '3.5' },
    lg: { container: 'w-20 h-20', svg: 'w-10 h-10', strokeCircle: '3', strokeCheck: '4' },
  }[size];

  return (
    <div className={`relative mx-auto ${dimensions.container} flex items-center justify-center`}>
      {/* Subtle expanding monochromatic aura */}
      <div className="absolute inset-0 rounded-full bg-white/10 animate-checkmark-aura pointer-events-none" />

      {/* Outer disc with spring pop */}
      <div className={`w-full h-full rounded-full bg-white/10 border border-white/25 flex items-center justify-center shadow-lg shadow-white/5 animate-checkmark-pop`}>
        <svg
          className={`${dimensions.svg} text-white`}
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Circle */}
          <circle
            cx="26"
            cy="26"
            r="23"
            stroke="currentColor"
            strokeWidth={dimensions.strokeCircle}
            strokeLinecap="round"
            className="animate-checkmark-circle"
          />

          {/* Animated Checkmark */}
          <path
            d="M16 27L23 34L36 19"
            stroke="currentColor"
            strokeWidth={dimensions.strokeCheck}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-checkmark-check"
          />
        </svg>
      </div>
    </div>
  );
};
