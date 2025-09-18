
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { offerings } from '@/lib/offerings';
import { CheckCircle } from 'lucide-react';

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
                <Card key={offering.slug} className="w-full max-w-5xl mx-auto bg-card/80 flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <CardHeader className="text-center md:text-left">
                      <CardTitle className="text-2xl font-bold font-headline text-shimmer">{offering.title}</CardTitle>
                      <CardDescription className="text-foreground/90 text-lg italic pt-2">{offering.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center md:text-left">
                      <p className="mb-6">{offering.description}</p>
                      <Button asChild>
                        <Link href={`/offerings/${offering.slug}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </div>
                  <div className="md:w-1/2 bg-card/50 p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                    <h3 className="text-lg font-semibold text-shimmer mb-4 text-center md:text-left">What You'll Achieve</h3>
                    <ul className="space-y-3 text-left">
                        {offering.highlights?.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                              <span className="text-foreground/90 text-sm">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
