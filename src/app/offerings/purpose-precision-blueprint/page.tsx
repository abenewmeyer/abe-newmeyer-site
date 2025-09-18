
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PurposeImpactBlueprintPage() {
  const sessions = [
    {
      title: 'Session 1: Purpose Definition & "Why" Uncovery',
      description: '"AI Abe" guides you through a structured process to uncover your authentic purpose, helping you define exactly what you want and, more importantly, why you want it, moving beyond societal expectations to internal motivations.'
    },
    {
      title: 'Session 2: Personal Purpose Statement Blueprint & Resource Assessment',
      description: 'Receive step-by-step guidance to craft a clear, concise, and compelling purpose statement. Conduct a comprehensive inventory of your personal skills, talents, and existing resources to identify what you need to achieve your goals.'
    },
    {
      title: 'Session 3: "The Filter Question" Workshop & Financial Purpose Alignment',
      description: 'Learn and apply Abe\'s powerful decision-making filter: "How will this help me fulfill my purpose?" Develop a personalized framework for wealth accumulation and distribution, specifically designed to fund and amplify your life purpose.'
    },
    {
      title: 'Session 4: Monetization Strategy & Intentional Action Plan',
      description: 'Develop strategies for monetizing unrecognized expertise and design high-ticket offers. Create a detailed, actionable plan that integrates your purpose, resources, and financial strategies for lasting impact.'
    },
  ];

  const deliverables = [
    'Personal Purpose Statement Blueprint & Worksheet',
    '"The Filter Question" Guide',
    'Purpose Integration Matrix: A tool to evaluate commitments against your purpose.',
    'Purpose Mapping for Indirect Contributions Exercise',
    'Strategic Action Plan Template',
    'Unlimited Priority Email Support with "AI Abe" for the program duration.'
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Purpose & Impact Blueprint: 1-on-1 Intensive
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Define and clarify purpose with laser-like precision and leverage your unique gifts to fulfill a higher calling and leave a meaningful legacy.
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
              <p className='text-lg'>Ready to build your blueprint for a life of purpose and impact?</p>
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
