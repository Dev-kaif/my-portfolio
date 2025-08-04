import { useEffect, useRef, useState, RefObject } from "react";

// Define the shape of the position data
interface Position {
  x: number;
  y: number;
}

export function useMousePosition<T extends HTMLElement = HTMLElement>(): {
  // Allow the target ref's type to be T or null
  target: RefObject<T | null>;
  x: number;
  y: number;
} {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  // Explicitly create a ref that can hold T or null
  const target = useRef<T | null>(null);

  useEffect(() => {
    // The logic here remains the same
    const element = target.current || document;

    const handleMouseMove = (event: MouseEvent) => {
      let newPosition: Position;

      if (target.current) {
        const rect = target.current.getBoundingClientRect();
        newPosition = {
          x: Math.round(event.clientX - rect.left),
          y: Math.round(event.clientY - rect.top),
        };
      } else {
        newPosition = {
          x: event.clientX,
          y: event.clientY,
        };
      }

      if (target.current) {
        newPosition.x = Math.max(0, newPosition.x);
        newPosition.y = Math.max(0, newPosition.y);
      }

      setPosition(newPosition);
    };

    element.addEventListener("mousemove", handleMouseMove as EventListener);

    return () => {
      element.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.current]);

  return { target, ...position };
}
