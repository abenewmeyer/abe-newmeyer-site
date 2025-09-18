
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function KintsugiGenesisPage() {
  const coreModules = [
    'The Golden Story Inventory: Uncovering Your Key Life Moments',
    'Narrative Reframing: Turning Perceived Failures into Strengths',
    'The Wabi-Sabi Principle: Finding Beauty in Imperfection',
    'Your Golden Purpose Statement: Articulating Your Authentic "Why"',
  ];

  const whoIsThisFor = [
    'Individuals feeling stuck or defined by past mistakes.',
    'Professionals seeking deeper alignment between their work and personal story.',
    'Anyone at a crossroads, wanting to make their next chapter more intentional.',
    'Those who feel their story is a liability and want to turn it into their greatest asset.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Kintsugi Genesis: Embracing Your Golden Story
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Discover the strength in your story's "fractures" and embrace your entire life journey.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>Your life story, with all its challenges and triumphs, is not a history to be hidden but a source of immense strength. This intensive one-on-one program guides you to look at the "breaks" in your narrative—the setbacks, the unexpected turns, the moments of vulnerability—and see them not as flaws, but as opportunities for growth. Using the Kintsugi philosophy, we will "mend" these fractures with the gold of self-awareness and intentionality, transforming your personal history into a powerful, authentic, and cohesive story that becomes the unshakable foundation for your future.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Be Greater Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>This program is the first step in the "Be Greater" framework. Before you can build, you must understand your foundation. Kintsugi Genesis is about total clarity and acceptance of your past, allowing you to answer the foundational questions of the framework: "What do you want?" and "What do you have?" by looking at your life's story with newfound perspective. It’s the essential groundwork for building a life of purpose and fulfillment.</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
               <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                   <p>Through four weekly one-on-one coaching sessions, you will engage in guided narrative exploration using the "Golden Threads" journal. This is a deeply personal and illuminating process designed to help you reframe your past, find power in your imperfections, and align your future goals with the full truth of your life's journey.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">Core Modules</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {coreModules.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-foreground/90">{benefit}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Who Is This For?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whoIsThisFor.map((who, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{who}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Structure & Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p><strong className="text-primary">Duration:</strong> 1-Month Intensive.</p>
                <p><strong className="text-primary">Includes:</strong> 4 x 60-minute one-on-one coaching sessions and "The Golden Threads" guided journal.</p>
                <p><strong className="text-primary">Investment:</strong> $4,000</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <Button asChild size="lg">
                <Link href="/consult">Schedule a Free Consultation</Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" disabled>Enroll Now for $4,000</Button>
                <p className="text-xs text-muted-foreground mt-2">(Stripe Integration Coming Soon)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
