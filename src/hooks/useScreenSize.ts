"use client"

import { useState, useEffect } from 'react';

interface ScreenSize {
  width: number;
  height: number;
  lessThan: (size: 'sm' | 'md' | 'lg') => boolean;
}

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
    lessThan: () => false,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        lessThan: (size) => {
          if (size === 'sm') return window.innerWidth < 640;
          if (size === 'md') return window.innerWidth < 768;
          if (size === 'lg') return window.innerWidth < 1024;
          return false;
        },
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};