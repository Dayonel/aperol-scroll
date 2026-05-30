import { Artwork } from '@/app/types/artwork';
import ArtworkPanel from './artwork-panel';

interface ArtworkSectionProps {
  artworks: Artwork[];
}

export default function ArtworkSection({ artworks }: ArtworkSectionProps) {
  return (
    <section className="outline w-fit m-auto">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(4,12rem)] grid-rows-4 md:grid-rows-1 justify-center h-[400svh] md:h-[calc(100svh-16rem)]">
        {artworks.map((art, index) => (
          <ArtworkPanel
            key={index}
            artwork={art}
            index={index + 1}
          ></ArtworkPanel>
        ))}
      </div>
    </section>
  );
}
