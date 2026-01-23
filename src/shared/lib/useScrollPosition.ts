import { useState, useEffect } from 'react';

/**
 * 스크롤 위치가 threshold를 넘었는지 감지하는 훅
 * requestAnimationFrame을 사용하여 성능 최적화
 */
export const useScrollPosition = (threshold = 50): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // passive: true로 스크롤 성능 향상
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 초기 상태 설정
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

export default useScrollPosition;
