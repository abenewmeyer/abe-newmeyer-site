
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-8 bg-background/95 border-t">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <Button asChild className="animate-pulse" size="lg">
            <Link href="https://donate.stripe.com/bJe6oI9E05IccpJdn21ck08" target="_blank">
              <Heart className="mr-2 h-5 w-5 text-red-500 fill-red-500" />
              Help Us Continue to Be Greater
            </Link>
          </Button>
        </div>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Abe Newmeyer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
