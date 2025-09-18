
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function FoundationsMasterclassPage() {
  const keyBenefits = [
    'Clarity on your unique value proposition.',
    'A powerful, resonant "why" that drives all your actions.',
    'Increased resilience in the face of challenges.',
    'Enhanced decision-making aligned with your core values.',
    'A compelling narrative that attracts opportunities.',
  ];

  const whoIsThisFor = [
    'Entrepreneurs seeking to align their business with a deeper mission.',
    'Professionals at a crossroads, looking for their next meaningful move.',
    'Leaders aiming to inspire their teams with a compelling vision.',
    'Anyone feeling adrift and seeking a strong anchor for their life.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              Foundations Masterclass (Group Intensive)
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Unlock the golden threads of your story and chart your destiny.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>This masterclass is your immersion into defining the core principles that make you resilient, whole, and uniquely powerful. In a world of noise, clarity is your superpower. This intensive program is designed to guide you through a profound process of self-discovery, helping you find strength in your story's "golden lines" to forge an unshakable foundation for your personal and professional life.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>We believe that your most powerful "why" is not found, but forged. It’s built from the fragments of your experiences, challenges, and triumphs. This program helps you piece together these fragments, mending them with the "gold" of self-awareness and intention. The result is a core purpose that is not just defined, but deeply felt and embodied—a resilient guide for every decision you make.</p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>Through a series of guided workshops, peer discussions, and personal reflection, you will dissect your life's key moments, identify recurring themes, and synthesize them into a clear and actionable purpose statement. We provide the framework and the tools; you bring the willingness to explore.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">Why This Program</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>Unlike generic goal-setting workshops, this program focuses on the "who" behind the "what." It’s an inside-out process that ensures your goals are a true reflection of your most authentic self, creating sustainable motivation and fulfillment.</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

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
                <p><strong className="text-primary">Structure:</strong> A 4-week virtual group intensive, including weekly live sessions, peer mastermind groups, and one-on-one coaching.</p>
                <p><strong className="text-primary">Investment:</strong> $2,500</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <Button asChild size="lg">
                <Link href="/consult">Schedule a Free Consultation</Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" disabled>Enroll Now for $2,500</Button>
                <p className="text-xs text-muted-foreground mt-2">(Stripe Integration Coming Soon)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
