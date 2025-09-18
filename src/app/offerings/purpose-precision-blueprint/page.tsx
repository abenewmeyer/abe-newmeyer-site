
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PurposePrecisionBlueprintPage() {
  const keyFeatures = [
    'Purpose Precision Framework: A structured process to uncover your authentic purpose, moving beyond societal expectations to internal motivations.',
    'Personal Purpose Statement Blueprint: Step-by-step guidance to craft a clear, concise, and compelling purpose statement that acts as your north star.',
    '"The Filter Question" Workshop: Learn and apply Abe\'s powerful decision-making filter: "How will this help me fulfill my purpose?" to align daily actions with your long-term destiny.',
    'Resource & Skill Assessment: Personalized sessions to inventory your existing skills, resources, and strengths, and identify what\'s needed to achieve your goals.',
    'Strategic Action Plan Development: Create an actionable plan that is both focused on your destination and adaptable to life\'s changing routes.',
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
              This program is the foundational entry point, dedicated to gaining absolute clarity and strategic direction for all areas of your life.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept: Define and Clarify Purpose</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>This intensive experience provides laser-like precision in identifying your unique "why," ensuring every decision you make moves you closer to your destiny. It's the essential first step in the "Be Greater" framework, providing the strategic roadmap to achieve your desired goals.</p>
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
                <p><strong className="text-primary">Duration:</strong> An 8-week one-on-one intensive.</p>
                <p>This program includes personalized sessions to build your purpose blueprint, assess your skills and resources, and develop a strategic action plan to get exactly what you want out of life.</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <p className='text-lg'>Ready to build your blueprint for success?</p>
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
