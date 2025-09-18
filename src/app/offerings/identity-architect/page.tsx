
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function IdentityArchitectPage() {
  const keyFeatures = [
    'Self-Reinvention Coaching: Guided sessions to identify and release limiting beliefs, craft a new identity blueprint, and develop a powerful, self-affirming mantra.',
    '"Third-Person Self-Reference" Exercise: Learn techniques like referring to oneself in the third person to reinforce and embody the new persona, mirroring Abe\'s own practice.',
    'Appreciation & Resource Leveraging: Exercises to deeply identify and appreciate personal gifts, talents, and the value of existing relationships, turning them into assets for purpose fulfillment.',
    'Intentional Action Plan & Post-Program Integration: Strategies to align daily actions with the new identity, embracing the "uncomfortable" yet transformative journey of growth.',
    'Relationship Cultivation & Evaluation: Tools to assess and nurture a supportive "inner circle," and strategically distance from negative influences to maximize personal joy and growth.',
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
              This program empowers clients to consciously embody their ideal self, detach from limiting beliefs, and cultivate profound appreciation for their current life, relationships, and existing resources as the foundation for their future legacy.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>Embody a New Identity and Create Lasting Impact by valuing current possessions and relationships. This program focuses on building a life that truly reflects one's highest aspirations.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Key Features</CardTitle>
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
                <CardTitle className="text-2xl font-headline text-shimmer">Structure</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p><strong className="text-primary">Duration:</strong> 10 Weeks.</p>
                <p>Includes eight weekly one-on-one sessions plus a follow-up to ensure sustained transformation and integration of your new identity.</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
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
