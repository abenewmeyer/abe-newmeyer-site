
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { offerings } from '@/lib/offerings';

const allOfferings = offerings.sort((a, b) => a.sortOrder - b.sortOrder);

export default function OfferingsPage() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">
            Abe Newmeyer | The Purpose Architect
          </h1>
        </header>

        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="mt-4 text-foreground/80 text-lg">
           Abe Newmeyer, formerly Darren Allridge, is "The Purpose Architect," empowering professionals to align with their ideal selves through a proven framework that transforms finances, career, health, and spirit, enabling them to create lasting impact and leave a meaningful legacy. His programs are designed for deep, lasting transformation, focusing on value and results, not just hours.
          </p>
        </section>

        <main className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-shimmer text-center mb-12">Premium 1-on-1 Offerings</h2>
            <div className="space-y-12">
              {allOfferings.map((offering) => (
                <Card key={offering.slug} className="w-full max-w-4xl mx-auto bg-card/80">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-headline text-shimmer">{offering.title}</CardTitle>
                    <CardDescription className="text-foreground/90 text-lg italic">{offering.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="mb-6">{offering.description}</p>
                    <Button asChild>
                      <Link href={`/offerings/${offering.slug}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
