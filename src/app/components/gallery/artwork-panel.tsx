import { Artwork } from '@/app/types/artwork';
import { memo } from 'react';

interface ArtworkPanelProps {
  artwork: Artwork;
  index: number;
}

const ArtworkPanel = ({ artwork }: ArtworkPanelProps) => {
  return <p>{artwork.title}</p>;
};

export default memo(ArtworkPanel);
