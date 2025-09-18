
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LegacyAscendantPage() {
  const keyFeatures = [
    'Integrated Purpose & Identity Mentorship: 12 Monthly Two-Hour One-on-One Sessions providing continuous, personalized guidance.',
    'Advanced Resilience & Gratitude Mastery: Bespoke strategies for emotional fortitude, transforming major adversities into profound advantages.',
    'Purpose-Driven Wealth Architecture & Monetization: In-depth personal mentorship focusing on aligning financial strategies with your defined purpose.',
    'Infinite Impact System & Legacy Blueprint: Development of a personalized, multi-generational legacy-building framework.',
    'Continuous VIP Priority Communication: Unlimited direct access for immediate, high-level guidance and real-time support over the full year.',
    'Annual Strategic Vision & Legacy Retreat (1-2 Days): An exclusive, immersive retreat for deep-dive strategic planning and vision refinement.',
    'Lifetime Membership to Purpose Architects Elite: Ongoing access to masterclasses, peer-led sessions, and exclusive content.',
    'Living Philosophy: Embrace the philosophy of celebrating all experiences as integral to becoming a stronger leader.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Purpose Architect's Grand Design: The Legacy Ascendant
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              The ultimate, year-long, immersive executive mentorship program that encompasses all aspects of the "Be Greater" framework.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>The culmination of "Be Greater," this program integrates all five pillars (Define Purpose, Cultivate Resilience, Embrace Gratitude, Embody New Identity, Create Lasting Impact) into a holistic, year-long transformation. It positions wealth and resources as tools for a higher calling and a meaningful legacy.</p>
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
                <p><strong className="text-primary">Duration:</strong> 12 Months.</p>
                <p>This is a year-long, all-encompassing, executive-level mentorship program for unparalleled value and transformative impact.</p>
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
