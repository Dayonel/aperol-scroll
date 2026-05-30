import { Artwork } from '@/app/types/artwork';
import ArtworkPanel from './artwork-panel';

interface ArtworkSectionProps {
  artworks: Artwork[];
  sectionProgress: number;
}

export default function ArtworkSection({
  artworks,
  sectionProgress,
}: ArtworkSectionProps) {
  return (
    <section className="outline">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(4,12rem)] grid-rows-1 justify-center h-svh md:h-[calc(100svh-16rem)]">
        {artworks.map((art, index) => (
          <ArtworkPanel
            key={index}
            artwork={art}
            index={index + 1}
            sectionProgress={sectionProgress}
          ></ArtworkPanel>
        ))}
      </div>
    </section>
  );
}
