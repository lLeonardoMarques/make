import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours = 7,
  initialMinutes = 42,
  initialSeconds = 19
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white px-3.5 py-2.5 rounded-2xl border border-zinc-800 shadow-sm flex items-center gap-3 shrink-0">
      <div className="flex items-center gap-1.5 text-rose-400">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-wider hidden sm:inline">
          Termina em:
        </span>
      </div>

      <div className="flex items-center gap-1 font-mono text-xs font-black">
        <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-pink-400">
          {String(timeLeft.hours).padStart(2, '0')}h
        </span>
        <span className="text-zinc-600">:</span>
        <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-pink-400">
          {String(timeLeft.minutes).padStart(2, '0')}m
        </span>
        <span className="text-zinc-600">:</span>
        <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-rose-500">
          {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>
    </div>
  );
};
