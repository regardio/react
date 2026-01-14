'use client';

import { cn } from '@regardio/tailwind/utils';
import { useEffect, useState } from 'react';

export function Countdown(): React.JSX.Element {
  const [timerValue, setTimerValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the mounted flag to true after the component has been mounted
    setIsMounted(true);

    const intervalId = setInterval(() => {
      setTimerValue((prevValue) => {
        return prevValue + 1;
      });
    }, 1000);

    return () => {
      return clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={cn(
        'before:absolute',
        'before:bg-white',
        'before:content-[""]',
        'before:h-[180px]',
        'before:rounded-full',
        'before:w-[180px]',
        'flex',
        'h-[240px]',
        'items-center',
        'justify-center',
        'relative',
        'rounded-full',
        'w-[240px]',
      )}
      style={{
        background: `conic-gradient(
          transparent ${6 * (isMounted ? timerValue : 0)}deg,
          hsl(var(--red-500)) 0deg,
          hsl(var(--red-500)) 15deg,
          hsl(var(--coral-500)) 15deg,
          hsl(var(--coral-500)) 45deg,
          hsl(var(--orange-500)) 45deg,
          hsl(var(--orange-500)) 75deg,
          hsl(var(--yellow-500)) 75deg,
          hsl(var(--yellow-500)) 105deg,
          hsl(var(--olive-500)) 105deg,
          hsl(var(--olive-500)) 135deg,
          hsl(var(--lime-500)) 135deg,
          hsl(var(--lime-500)) 165deg,
          hsl(var(--green-500)) 165deg,
          hsl(var(--green-500)) 195deg,
          hsl(var(--teal-500)) 195deg,
          hsl(var(--teal-500)) 225deg,
          hsl(var(--cyan-500)) 225deg,
          hsl(var(--cyan-500)) 255deg,
          hsl(var(--blue-500)) 255deg,
          hsl(var(--blue-500)) 285deg,
          hsl(var(--purple-500)) 285deg,
          hsl(var(--purple-500)) 315deg,
          hsl(var(--pink-500)) 315deg,
          hsl(var(--pink-500)) 345deg,
          hsl(var(--red-500)) 345deg
          )`,
      }}
    >
      <span className={cn('text-foreground', 'relative', 'text-3xl', 'font-bold')}>
        {isMounted ? (timerValue < 10 ? `0${timerValue}` : timerValue) : 0}
      </span>
    </div>
  );
}
