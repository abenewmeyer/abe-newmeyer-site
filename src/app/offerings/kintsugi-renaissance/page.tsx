
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function GoldenSelfPage() {
  const keyOutcomes = [
    'Profound resilience and the ability to thrive after adversity.',
    'An authentic identity that integrates all parts of your past.',
    'A personalized blueprint for post-traumatic growth and conscious self-creation.',
    'The ability to turn your greatest challenges into your most powerful assets.',
    'Unshakable self-trust and clarity in your life\'s direction.',
  ];

  const whoIsThisFor = [
    'Individuals who have navigated significant life challenges and are ready for what’s next.',
    'Leaders looking to embody authenticity and resilience in their leadership style.',
    'Anyone who feels they have "survived" and is now ready to consciously "thrive".',
    'Those ready to move beyond their past and actively architect their future self.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Renaissance Program: Forging an Unwavering Golden Self
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Actively integrate past challenges to build a stronger, more authentic, and resilient self.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>A renaissance is a rebirth. This program is for those who have already embraced their story and are now ready to actively use it to forge a new, more powerful identity. This isn't about forgetting the past; it's about making it serve you. We will take the "mended" pieces of your story and integrate them into a cohesive, resilient, and beautiful new whole. You will learn to not only accept your past but to leverage it, turning your hard-won wisdom into the foundation of an unwavering "Golden Self."</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Be Greater Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>This program embodies the "Enjoy It" and "Love It" phases of the "Be Greater" framework. Having clarified what you want and what you have, we now focus on building the systems and mindset to truly enjoy the process of becoming. Through the "Wabi-Sabi Acceptance Protocol," you will learn to love the journey of growth, imperfections and all. This is where you move from knowing your story to actively using it to create a life you love.</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
               <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>Over three months of intensive one-on-one coaching, you will move from theory to practice. This is a high-touch, deeply personalized journey that includes eight bi-weekly sessions focused on practical integration, resilience-building, and identity creation. With unlimited email support, you will have a dedicated partner in your transformation.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">Key Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {keyOutcomes.map((benefit, index) => (
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
                <p><strong className="text-primary">Duration:</strong> 3-Month One-on-One Intensive.</p>
                <p><strong className="text-primary">Includes:</strong> 8 x 60-minute bi-weekly one-on-one sessions, the "Wabi-Sabi Acceptance Protocol," and unlimited email support.</p>
                <p><strong className="text-primary">Investment:</strong> $12,000</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <Button asChild size="lg">
                <Link href="/consult">Schedule a Free Consultation</Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" disabled>Enroll Now for $12,000</Button>
                <p className="text-xs text-muted-foreground mt-2">(Stripe Integration Coming Soon)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
