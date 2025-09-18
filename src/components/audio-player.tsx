'use client';

import dynamic from 'next/dynamic';
import type { ReactPlayerProps } from 'react-player';
import { Skeleton } from '@/components/ui/skeleton';

const ReactPlayer = dynamic(() => import('react-player'), { 
  ssr: false,
  loading: () => <Skeleton className="w-full h-[52px]" />
});

const AudioPlayer = (props: ReactPlayerProps) => {
  return (
    <div className="bg-black/80">
      <ReactPlayer 
        {...props} 
        width="100%" 
        height="52px" 
        controls
      />
    </div>
  );
};

export default AudioPlayer;
