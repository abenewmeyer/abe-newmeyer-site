
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function UnwaveringSpiritImmersionPage() {
  const keyFeatures = [
    'Resilience & Growth Coaching: Personalized one-on-one sessions for developing mental toughness, reframing obstacles, and transforming setbacks into powerful learning experiences.',
    'Transformative Gratitude Mastery: Comprehensive guidance on integrating daily gratitude practices to identify "bright spots" and consciously shift your state from "impending doom to eager anticipation".',
    'Adversity-to-Advantage Framework: Learn Abe\'s proven methods for navigating and growing through difficult times, drawing from his own profound experiences.',
    'Emotional Fortitude Toolkit: Access practical tools and exercises for managing stress and building the mental resilience required for a joyful journey.',
    'Kintsugi Philosophy Integration: Learn to see life\'s "fractures" not as damage, but as opportunities for "golden repair," adding to your unique strength.',
    'Unlimited Email Support: Direct access for guidance throughout the program to ensure you feel supported every step of the way.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              Enjoy Getting It: The Unwavering Spirit & Gratitude Immersion
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              This program focuses on cultivating resilience and shifting your mindset through gratitude, making the journey of achievement enjoyable and sustainable.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept: Cultivate Resilience & Embrace Gratitude</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>True fulfillment isn't just about reaching your goals; it's about finding joy in the process. This program provides personalized strategies to develop the capacity to "recover quickly from life's inevitable challenges" and integrate daily gratitude practices for sustained positivity, allowing you to not just succeed, but to enjoy the journey.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">What You Will Achieve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Program Structure</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p><strong className="text-primary">Duration:</strong> A 12-week one-on-one immersion.</p>
                <p>This program includes bi-weekly one-on-one coaching sessions, self-paced modules, and unlimited email support to build your emotional fortitude and master the art of gratitude.</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <p className='text-lg'>Ready to find joy and resilience on your path to success?</p>
              <Button asChild size="lg">
                <Link href="/consult">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
