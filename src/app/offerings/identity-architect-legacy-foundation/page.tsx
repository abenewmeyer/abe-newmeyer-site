
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function GratitudeAlchemistPage() {
    const sessions = [
        {
          title: 'Session 1: "Bright Spots" Identification & Gratitude Foundation',
          description: '"AI Abe" guides you in recognizing things you are grateful for, even in challenging times. This includes understanding the science and foundational practices of gratitude to alter your state and cultivate a positive mindset.'
        },
        {
          title: 'Session 2: Mindset Shift for Eager Anticipation & Present Abundance',
          description: 'Learn to consciously reframe challenges into opportunities, moving from "impending doom to eager anticipation." You will also cultivate a profound appreciation for everything currently in your life, fostering a sense of fullness.'
        },
        {
          title: 'Session 3: Embracing Imperfection & Growth (Kintsugi Philosophy)',
          description: 'Explore how to willingly accept life\'s "fractures." This session uses the Kintsugi philosophy to help you find meaning in broken experiences, transforming challenges into sources of strength.'
        },
        {
          title: 'Session 4: Habit Stacking & Sustained Gratitude Integration',
          description: 'Develop personalized strategies for seamlessly integrating gratitude practices into your existing daily routines. This ensures consistency and discipline, leading to long-term sustained positivity and fulfillment.'
        },
      ];
    
      const deliverables = [
        'Interactive Gratitude Journaling Platform (digital or guided prompts)',
        '"Bright Spots" Identification & Appreciation Workbook',
        'Mindset Shift & Reframe Toolkit: Practical exercises to implement mindset changes.',
        'Habit Stacking & Consistency Guide',
        'Unlimited Email Support with "AI Abe" for the program duration.'
      ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Gratitude Alchemist: 1-on-1 Intensive
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
                Embrace transformative gratitude, identify and appreciate what you already have, and cultivate sustained positivity through profound mindset shifts.
            </p>
          </header>

          <main className="space-y-12">
             <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-shimmer">Program Structure</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                    <p><strong className="text-primary">Duration:</strong> A 4-week one-on-one intensive program.</p>
                    <p><strong className="text-primary">Session Length:</strong> Each of the 4 weekly sessions lasts between 90 to 120 minutes.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-shimmer">One-on-One Sessions with Abe Newmeyer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {sessions.map((session, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-lg text-primary">{session.title}</h3>
                        <p className="text-foreground/90 mt-2">{session.description}</p>
                    </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-shimmer">Additional Deliverables & Support</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                    {deliverables.map((item, index) => (
                        <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{item}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <p className='text-lg'>Ready to transform your life through the power of gratitude?</p>
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
