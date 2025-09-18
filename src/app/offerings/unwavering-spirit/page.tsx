import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function UnwaveringSpiritPage() {
  const keyBenefits = [
    'The ability to bounce back from setbacks faster and stronger.',
    'A proactive mindset that turns obstacles into opportunities.',
    'Enhanced leadership presence and calm under pressure.',
    'Deepened self-trust and confidence in your abilities.',
    'Practical tools to manage stress and prevent burnout.',
  ];

  const whoIsThisFor = [
    'Leaders navigating high-stakes environments and organizational change.',
    'Entrepreneurs facing the constant volatility of building a business.',
    'Professionals recovering from a career setback or burnout.',
    'Anyone determined to stop being defined by their circumstances and start defining them.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              Unwavering Spirit (Hybrid Coaching)
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Transform adversity into your greatest advantage.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>This program is built on the Kintsugi philosophy of finding strength and beauty in the fractures of life's challenges. Resilience is not about avoiding failure; it's about mastering the art of the comeback. Unwavering Spirit is a premium hybrid coaching experience that combines personalized one-on-one strategy with a powerful group curriculum to build your capacity to thrive in the face of adversity.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>True resilience isn't an innate trait; it's a dynamic, buildable skill set. This program treats life's challenges—professional setbacks, personal trials, moments of doubt—as "breaks" that provide an opportunity for Kintsugi. We don't just patch the cracks; we guide you in mending them with the "gold" of strategic insight, emotional regulation, and a purpose-driven mindset. You will learn to see every challenge not as a point of failure, but as a part of a history that makes you stronger, more valuable, and more capable than before.</p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>This 3-month hybrid program combines bi-weekly one-on-one coaching sessions with Abe Newmeyer, a structured online curriculum, and exclusive group workshops. You get the personalized attention to tackle your specific challenges and the collaborative energy of a community committed to growth.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">Why This Program</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>Unwavering Spirit offers the best of both worlds: personalized coaching and peer support. It provides both the "what" (the strategies for resilience) and the "how" (the personalized application to your life and career), ensuring deep, sustainable transformation.</p>
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
                <p><strong className="text-primary">Structure:</strong> A 3-month hybrid program including six 1-on-1 sessions, a full online curriculum, and monthly group coaching calls.</p>
                <p><strong className="text-primary">Investment:</strong> $8,000</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <Button asChild size="lg">
                <Link href="/schedule">Schedule a Free Consultation</Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" disabled>Enroll Now for $8,000</Button>
                <p className="text-xs text-muted-foreground mt-2">(Stripe Integration Coming Soon)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
