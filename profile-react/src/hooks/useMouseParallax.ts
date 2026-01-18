import { useCallback, useState, type MouseEvent as ReactMouseEvent } from "react";

interface UseMouseParallaxOptions {
  maxOffset?: number;
}

interface Offset {
  x: number;
  y: number;
}

export const useMouseParallax = ({ maxOffset = 20 }: UseMouseParallaxOptions = {}) => {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: ReactMouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

      setOffset({
        x: normalizedX * 2 * maxOffset,
        y: normalizedY * 2 * maxOffset,
      });
    },
    [maxOffset]
  );

  const handleMouseLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return { offset, handleMouseMove, handleMouseLeave } as const;
};
