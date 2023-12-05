'use client';

import { useEffect, useState } from 'react';
import { Icons } from '@/components/icons';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 dark:text-black dark:bg-white text-white bg-black ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <Icons.arrowUp className="h-5 w-5" />
    </button>

    /* <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        className="p-3 rounded-full dark:text-black dark:bg-white text-white bg-black shadow-lg focus:outline-none"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icons.arrowUp className="h-5 w-5" />
      </button>
    </div> */
  );
}
