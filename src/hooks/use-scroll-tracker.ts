import { useMotionValue, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef } from 'react';

export const useScrollTracker = (sections: number) => {
  const ref = useRef(null);
  const sectionProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const global = v * sections;
    const index = Math.floor(global);
    const progress = global - index;

    sectionProgress.set(progress);
  });

  return {
    ref,
    sectionProgress,
  };
};
