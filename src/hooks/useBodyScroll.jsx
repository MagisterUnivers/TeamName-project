import { useEffect } from 'react';

export const useBodyScroll = state => {
  useEffect(() => {
    document.body.style.overflow = state ? 'hidden' : 'auto';

    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [state]);
};
