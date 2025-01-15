import { useEffect, useState } from "react";

export const useObserver = (
  ref: React.RefObject<Element>,
  options?: {
    isReStart?: boolean;
    threshold?: number | number[];
    root?: Element | Document | null;
    rootMargin?: number;
  }
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return; // ref가 null인 경우 방어 코드

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (options?.isReStart) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: options?.threshold || [0, 0.25, 0.5, 0.75, 1],
        root: options?.root || null,
        rootMargin: `${options?.rootMargin || 0}px`,
      }
    );

    observer.observe(ref.current);

    // 컴포넌트 언마운트 시 observer 해제
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};
