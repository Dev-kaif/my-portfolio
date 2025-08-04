import { useEffect, useState } from "react";

/**
 * A custom React hook to determine if the screen width is "desktop" size.
 * @param {number} breakpoint - The width in pixels to consider the desktop breakpoint. Defaults to 1024.
 * @returns {boolean | null} - Returns true if screen is wider than breakpoint, false if narrower, and null on initial server render.
 */
export const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    // This function checks the window width and updates the state
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    // Set the initial value on the client
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]); // Re-run effect if breakpoint changes

  return isDesktop;
};
