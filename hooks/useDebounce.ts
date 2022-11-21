import { useEffect, useRef } from 'react';

export default function useDebounce(callback:any, delay:number) {
  const latestCallback = useRef<any>(undefined);
  const latestTimeout = useRef<any>(undefined);

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  return () => {
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current);
    }

    latestTimeout.current = setTimeout(() => {
      latestCallback.current();
    }, delay);
  };
}
