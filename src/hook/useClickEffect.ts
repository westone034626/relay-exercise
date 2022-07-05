import { useEffect } from "react";

function useClickEffect<T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  effect: (data: boolean) => void
) {
  useEffect(() => {
    function touchHandler(e: TouchEvent) {
      e.target instanceof Element &&
        effect(Boolean(ref.current?.contains(e.target)));
    }
    document.addEventListener("touchstart", touchHandler);
    return () => document.removeEventListener("touchstart", touchHandler);
  }, [ref, effect]);
}

export default useClickEffect;
