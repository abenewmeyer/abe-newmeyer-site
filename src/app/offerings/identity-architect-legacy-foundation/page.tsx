
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function IdentityArchitectPage() {
  const keyFeatures = [
    'Self-Reinvention Coaching: Guided one-on-one sessions to identify and release limiting beliefs, craft a new identity blueprint, and develop a powerful, self-affirming mantra.',
    '"Third-Person Self-Reference" Exercise: Learn powerful techniques to reinforce and embody your new persona, mirroring Abe\'s own transformative practice.',
    'Appreciation & Resource Leveraging: Exercises to deeply identify and appreciate your personal gifts, talents, and the value of existing relationships, turning them into assets for purpose fulfillment.',
    'Intentional Action Plan & Integration: Develop strategies to align your daily actions with your new identity, with follow-up to ensure sustained transformation.',
    'Relationship Cultivation & Evaluation: Tools to assess and nurture a supportive "inner circle" and strategically create distance from negative influences to maximize your growth.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              Love What You Have: The Identity Architect & Legacy Foundation
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              This program empowers you to consciously embody your ideal self, detach from limiting beliefs, and cultivate profound appreciation for your current life as the foundation for your future legacy.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept: Embody a New Identity & Create Lasting Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>Inspired by Abe's radical self-reinvention, this program focuses on building a life that truly reflects your highest aspirations by valuing your current life, relationships, and resources. It's about loving what you have to create the future you want.</p>
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
                <p><strong className="text-primary">Duration:</strong> A 10-week one-on-one program.</p>
                <p>Includes weekly one-on-one sessions plus a follow-up to ensure sustained transformation and the complete integration of your new, architected identity.</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <p className='text-lg'>Ready to architect the identity that will build your legacy?</p>
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
