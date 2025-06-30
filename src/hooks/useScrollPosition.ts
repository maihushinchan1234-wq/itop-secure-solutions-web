
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollManager } from '@/utils/scrollManager';

export const useScrollPosition = () => {
  const location = useLocation();

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
      // Restore scroll position or scroll to top for new pages
      const savedPosition = scrollManager.getPosition(location.pathname);
      setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 50);
    }
  }, [location]);
};
