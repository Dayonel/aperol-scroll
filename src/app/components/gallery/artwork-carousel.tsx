'use client';

import { Artwork } from '@/app/types/artwork';
import ArtworkPanel from './artwork-panel';
import InfiniteScroll from '../infinite-scroll';
import { useCallback, useRef, useState } from 'react';
import { fetchArtworks } from '@/lib/actions/fetchArtworks';

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

  return (
    <InfiniteScroll loadMore={loadMore}>
      {artworks.map((art, index) => (
        <ArtworkPanel key={index} artwork={art} index={index}></ArtworkPanel>
      ))}
    </InfiniteScroll>
  );
}
