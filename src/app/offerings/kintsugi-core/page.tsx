
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PurposePrecisionBlueprintPage() {
  const keyFeatures = [
    'Purpose Precision Framework: "AI Abe" guides participants through a structured process to uncover their authentic purpose, moving beyond societal expectations to internal motivations.',
    'Personal Purpose Statement Blueprint: Step-by-step guidance to craft a clear, concise, and compelling purpose statement.',
    '"The Filter Question" Workshop: Learn and apply Abe\'s powerful decision-making filter: "How will this help me fulfill my purpose?" to align daily actions with long-term destiny.',
    'Resource & Skill Assessment: Personalized sessions to inventory existing skills, resources, and strengths, and identify what\'s needed, leveraging Abe\'s practical approach to strategic resource management.',
    'Strategic Action Plan Development: Guidance to create an actionable plan, understanding that while the destination is fixed, the "route" may adapt, like a GPS recalculating.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              How To Get What You Want: The Purpose Precision Blueprint
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              This program is the foundational entry point, dedicated to gaining absolute clarity and strategic direction for all areas of life.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>Define and Clarify Purpose. This intensive experience provides a "laser-like precision" in identifying one's unique "why," ensuring every decision moves individuals closer to their destiny.</p>
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
                <p><strong className="text-primary">Duration:</strong> 8 Weeks.</p>
                <p>This 1-on-1 intensive includes personalized sessions to build your purpose blueprint, assess your skills and resources, and develop a strategic action plan.</p>
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
