import { useViewport } from "./useViewport ";

export const useResponsive = (breakpoint: number) => {
  const { width } = useViewport();
  return width < breakpoint;
};
