
import { useCallback, useEffect, useRef, useState } from "react";

export const useCustomScrollbar = (ref) => {
  const [scrollThumb, setScrollThumb] = useState(0);
  const ticking = useRef(false);


  const handleScroll = useCallback(() => {
    if (!ref.current) return
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setScrollThumb((ref.current.scrollTop / (ref.current.scrollHeight - ref.current.clientHeight)) * 100);
        ticking.current = false;
      })
      ticking.current = true
    }

  }, [ref])

  useEffect(() => {
    const scrollElem = ref.current;
    if (scrollElem) scrollElem.addEventListener("scroll", handleScroll);

    return () => scrollElem.removeEventListener("scroll", handleScroll);

  }, [ref, handleScroll]);
  return scrollThumb

}
