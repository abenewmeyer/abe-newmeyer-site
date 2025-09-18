import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BrightSpotsPage() {
  const keyBenefits = [
    'A consistent, life-changing gratitude practice.',
    'Reduced stress and increased emotional resilience.',
    'Improved relationships through expressed appreciation.',
    'Enhanced ability to find opportunities in challenges.',
    'A more positive and optimistic daily outlook.',
  ];

  const whoIsThisFor = [
    'Individuals feeling overwhelmed by negativity or stress.',
    'Leaders who want to foster a more positive and appreciative team culture.',
    'Anyone looking for a simple, powerful tool to enhance their mental well-being.',
    'High-achievers who want to find more joy and fulfillment in their success.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The "Bright Spots" Gratitude Mastery (Online Course)
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Cultivate transformative gratitude for a life of sustained positivity.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>Discover the "gold" in your daily life that mends challenges and builds an unbreakable positive mindset. Gratitude is more than a feeling; it's a practice. The "Bright Spots" Mastery is a comprehensive online course designed to help you systematically integrate gratitude into your life, transforming it from a fleeting emotion into a foundational pillar of your well-being and success.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>Inspired by the Kintsugi principle of finding beauty in repair, this course teaches you to see gratitude as the "gold" that mends the small cracks and fractures of daily life. By actively looking for and acknowledging the "bright spots"—the positive moments, interactions, and opportunities—you are not ignoring life's difficulties. Instead, you are strengthening your mindset to handle them with grace and resilience, reinforcing your emotional and mental wellbeing day by day.</p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>This self-paced course is delivered through a series of engaging video modules, practical exercises, and a guided gratitude journal. You'll learn the science behind gratitude, discover techniques to overcome common obstacles, and build a personalized practice that fits your lifestyle.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">Why This Program</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                  <p>This isn't about simply "thinking positive." Bright Spots Mastery provides a structured, evidence-based approach to making gratitude a non-negotiable part of your routine. It moves beyond platitudes to provide actionable strategies for real, lasting change.</p>
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
                <p><strong className="text-primary">Structure:</strong> Lifetime access to 8 self-paced video modules, downloadable workbooks, and a private community forum.</p>
                <p><strong className="text-primary">Investment:</strong> $3,500</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <Button asChild size="lg">
                <Link href="/consult">Schedule a Free Consultation</Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" disabled>Enroll Now for $3,500</Button>
                <p className="text-xs text-muted-foreground mt-2">(Stripe Integration Coming Soon)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
