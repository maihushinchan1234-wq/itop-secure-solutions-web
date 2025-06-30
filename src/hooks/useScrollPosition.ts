
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollManager } from '@/utils/scrollManager';

export const useScrollPosition = () => {
  const location = useLocation();
  const isFirstVisit = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      scrollManager.savePosition(location.pathname, position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Check if there's a hash in the URL (for section navigation)
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // For first visit to any page, start from top
      // For return visits, restore scroll position
      if (isFirstVisit.current || !scrollManager.getPosition(location.pathname)) {
        window.scrollTo(0, 0);
        isFirstVisit.current = false;
      } else {
        const savedPosition = scrollManager.getPosition(location.pathname);
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 50);
      }
    }
  }, [location]);
};
