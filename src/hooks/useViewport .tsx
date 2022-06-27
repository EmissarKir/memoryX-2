import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ViewportProps {
  width: number;
  height: number;
}

export const ViewportContext = createContext({} as ViewportProps);

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};
type ViewportProviderProps = {
  children: ReactNode | ReactNode[];
};

export const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};
