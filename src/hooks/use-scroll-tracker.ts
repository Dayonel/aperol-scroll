import { useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';

export const useScrollTracker = (sections: number) => {
  const ref = useRef(null);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const global = v * sections;
    const index = Math.floor(global);
    const progress = global - index;

    setSectionProgress(progress);
    setCurrIndex(index);
  });

  return {
    ref,
    sectionProgress,
    currIndex,
  };
};
