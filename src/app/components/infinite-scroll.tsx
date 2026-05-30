'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface InfiniteScrollProps {
  children: ReactNode;
  loadMore: () => void;
}

export default function InfiniteScroll({
  children,
  loadMore,
}: InfiniteScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    loadMore();
  }, [isInView, loadMore]);

  return (
    <>
      {children}
      <div ref={ref}></div>
    </>
  );
}
