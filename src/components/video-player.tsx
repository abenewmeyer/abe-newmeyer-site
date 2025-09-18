'use client';

import dynamic from 'next/dynamic';
import type { ReactPlayerProps } from 'react-player';
import { Skeleton } from '@/components/ui/skeleton';

const ReactPlayer = dynamic(() => import('react-player'), { 
  ssr: false,
  loading: () => <Skeleton className="absolute top-0 left-0 w-full h-full" />
});

const VideoPlayer = (props: ReactPlayerProps) => {
  return (
    <div className="relative aspect-video bg-black">
      <ReactPlayer 
        {...props} 
        width="100%" 
        height="100%" 
        controls
        className="absolute top-0 left-0" 
      />
    </div>
  );
};

export default VideoPlayer;
