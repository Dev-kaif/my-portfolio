"use client"

import { useState, useEffect } from 'react';

type BrowserName = "Chrome" | "Safari" | "Firefox" | "Unknown";

export const useDetectBrowser = (): BrowserName => {
  const [browserName, setBrowserName] = useState<BrowserName>('Unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome") && !userAgent.includes("Safari")) {
      setBrowserName("Chrome");
    } else if (userAgent.includes("Safari")) {
      setBrowserName("Safari");
    } else if (userAgent.includes("Firefox")) {
      setBrowserName("Firefox");
    }
  }, []);

  return browserName;
};