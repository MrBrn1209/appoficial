
import React from 'react';

interface Props {
  size?: number;      // px
  stroke?: number;    // px
  value: number;      // 0..100
  trackColor?: string;
  barColor?: string;
  label?: string;
}
const ProgressRing: React.FC<Props> = ({ size=64, stroke=8, value, trackColor="#E5F7EF", barColor="#10B981", label }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (value/100) * c;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} stroke={trackColor} strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2} cy={size/2} r={r}
        stroke={barColor} strokeWidth={stroke} fill="none"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c-dash}`}
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />
      {label && (
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize={size*0.28} fontWeight={700} fill="#065F46">
          {label}
        </text>
      )}
    </svg>
  );
};
export default ProgressRing;
