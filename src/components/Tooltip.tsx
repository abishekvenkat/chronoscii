import React from 'react';
import { getDaysRemaining } from '../utils/dateUtils';

interface TooltipProps {
  date: Date;
  percentComplete: string;
}

export default function Tooltip({ date, percentComplete }: TooltipProps) {
  const daysLeft = getDaysRemaining();
  
  return (
    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 bg-gray-800 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap font-mono">
      {date.toLocaleDateString()} - {percentComplete}% of year complete
      <br />
      {daysLeft} days remaining in {date.getFullYear()}
    </div>
  );
}