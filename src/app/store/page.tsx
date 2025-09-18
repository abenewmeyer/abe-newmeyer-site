import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export default function StorePage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <BookOpen className="w-16 h-16 mx-auto text-primary" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">
              Store Coming Soon
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              We are preparing a collection of valuable resources, including PDF guides and workbooks, to accelerate your growth. Check back soon!
            </p>
          </div>
          <Button asChild className="mt-6">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
