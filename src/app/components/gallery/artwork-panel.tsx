import { Artwork } from '@/app/types/artwork';
import { memo } from 'react';

interface ArtworkPanelProps {
  artwork: Artwork;
  index: number;
  sectionProgress: number;
}

const ArtworkPanel = ({
  artwork,
  index,
  sectionProgress,
}: ArtworkPanelProps) => {
  const isActive = Math.floor(sectionProgress / (1 / 4)) + 1 === index;

  return (
    <div
      className={`relative p-6 flex flex-col justify-between col-start-1 row-start-1 md:col-auto md:row-auto transition-all duration-300 after:absolute after:bg-gray-200 after:left-0 after:right-0 after:bottom-0 after:h-px md:after:left-0 md:after:bottom-8 md:after:w-px md:after:h-3/4 md:first:after:hidden ${
        isActive
          ? 'opacity-100 pointer-events-auto bg-brand'
          : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto bg-transparent'
      }`}
    >
      <h2 className="text-[4rem] md:text-[2rem] leading-[0.9] uppercase line-clamp-3 break-all pt-16">
        {artwork.title}
      </h2>

      <span className="text-[20rem] md:text-[12rem] leading-none text-center text-brand">
        {index}
      </span>
    </div>
  );
};

export default memo(ArtworkPanel);
