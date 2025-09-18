import type { MediaFile } from '@/lib/storage';
import AudioPlayer from '@/components/audio-player';
import VideoPlayer from '@/components/video-player';
import { Card, CardContent, CardDescription } from '@/components/ui/card';

export function MediaGrid({ files, limit, isLibraryPage = false }: { files: MediaFile[]; limit?: number, isLibraryPage?: boolean }) {
  const filesToDisplay = limit ? files.slice(0, limit) : files;

  if (filesToDisplay.length === 0) {
    if (isLibraryPage) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold">No Sessions Found</h2>
                <p className="text-muted-foreground mt-2">No sessions are available at the moment. Please check back later.</p>
                <div className="mt-6 max-w-2xl mx-auto p-4 bg-yellow-900/20 border border-yellow-700 rounded-md text-yellow-200 text-left">
                    <h3 className="font-bold">Note for Website Administrator:</h3>
                    <p>An empty session library usually indicates a misconfiguration in your Firebase Storage security rules. To allow the website to display your media files, you must enable public read access.</p>
                    <p className="mt-2">Please go to your Firebase Console, navigate to Storage > Rules, and replace the existing rules with the ones provided in this project's <code className="bg-black/50 px-1 rounded">README.md</code> file.</p>
                </div>
            </div>
        );
    }
    return (
        <div className="text-center py-12">
            <p className="text-muted-foreground">No sessions available at the moment. Please check back later.</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filesToDisplay.map((file) => (
        <Card key={file.url} className="overflow-hidden bg-card/80 backdrop-blur-sm shadow-lg border-primary/20">
          <CardContent className="p-0">
            {file.type === 'audio' ? <AudioPlayer url={file.url} /> : <VideoPlayer url={file.url} />}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold font-headline">{file.title}</h3>
              <CardDescription className="text-foreground/80 mt-2 h-16">{file.description}</CardDescription>
              <p className="text-sm text-shimmer capitalize mt-4">{file.type} Session</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
