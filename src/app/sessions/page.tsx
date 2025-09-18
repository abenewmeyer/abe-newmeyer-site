import { getMediaFiles } from '@/lib/storage-client';
import { MediaGrid } from '@/components/media-grid';

export default async function SessionsPage() {
  const allFiles = await getMediaFiles();
  const audioFiles = allFiles.filter((file) => file.type === 'audio');
  const videoFiles = allFiles.filter((file) => file.type === 'video');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">Wise Up Sessions</h1>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A complete library of audio and video sessions to guide your journey of growth and fulfillment.
            </p>
          </div>
        </div>

        {audioFiles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-headline text-shimmer mb-8 text-center">Audio Sessions</h2>
            <MediaGrid files={audioFiles} isLibraryPage={true} />
          </div>
        )}

        {videoFiles.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-headline text-shimmer mb-8 text-center">Video Sessions</h2>
            <MediaGrid files={videoFiles} isLibraryPage={true} />
          </div>
        )}
      </div>
    </section>
  );
}
