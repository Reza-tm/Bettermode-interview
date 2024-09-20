import { useEffect, useRef, useState } from "react";

type Args = {
  maxHeight?: number;
};

export const useExpandableElement = <T extends HTMLElement>(args: Args) => {
  const { maxHeight = 400 } = args;
  const containerRef = useRef<T>(null);
  const [isExpandable, setIsExpandable] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    if (containerHeight > maxHeight) setIsExpandable(true);
  }, [maxHeight, setIsExpandable]);

  return { ref: containerRef, isExpandable };
};
