'use client';

import { Artwork } from '@/app/types/artwork';
import InfiniteScroll from '../infinite-scroll';
import { useCallback, useMemo, useRef, useState } from 'react';
import { fetchArtworks } from '@/lib/actions/fetchArtworks';
import ArtworkSection from './artwork-section';
import { motion } from 'motion/react';
import { useScrollTracker } from '@/hooks/use-scroll-tracker';

interface ArtworkProps {
  initialArtworks: Artwork[];
}

export default function ArtworkCarousel({ initialArtworks }: ArtworkProps) {
  const [artworks, setArtworks] = useState(initialArtworks);
  const isLoading = useRef(false);

  const loadMore = useCallback(async () => {
    if (isLoading.current) return;
    isLoading.current = true;

    try {
      const { artworks: newArtworks } = await fetchArtworks();

      setArtworks((prev) => {
        return [...prev, ...newArtworks];
      });
    } finally {
      isLoading.current = false;
    }
  }, []);

  const sections = useMemo(() => {
    const chunks: Artwork[][] = [];
    for (let i = 0; i < artworks.length; i += 4) {
      chunks.push(artworks.slice(i, i + 4));
    }

    return chunks;
  }, [artworks]);

  const { sectionProgress, ref } = useScrollTracker(sections.length);

  return (
    <div ref={ref} className="relative w-full md:pt-32">
      <motion.div
        style={{
          scaleX: sectionProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          originX: 0,
          backgroundColor: 'var(--brand)',
        }}
      />

      <InfiniteScroll loadMore={loadMore}>
        {sections.map((chunk, index) => (
          <ArtworkSection artworks={chunk} key={index}></ArtworkSection>
        ))}
      </InfiniteScroll>
    </div>
  );
}
