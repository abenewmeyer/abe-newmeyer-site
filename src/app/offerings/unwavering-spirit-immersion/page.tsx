
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ResilientIdentityArchitectPage() {
    const sessions = [
        {
          title: 'Session 1: Adversity-to-Advantage Framework & Emotional Fortitude',
          description: '"AI Abe" provides personalized strategies to recover quickly from challenges and reframe obstacles into growth opportunities. You will receive practical tools for managing stress and building mental toughness, inspired by Abe\'s own journey.'
        },
        {
          title: 'Session 2: Limiting Belief Detachment Protocol',
          description: 'Identify and systematically release old identities, beliefs, and past patterns that no longer serve your defined purpose. This process is informed by Abe\'s profound experience of changing his name and embodying a new self.'
        },
        {
          title: 'Session 3: New Identity Blueprint & Mantra Creation',
          description: 'Develop a clear, compelling vision of your ideal self. You will craft a powerful, self-affirming mantra to reinforce this new identity daily, mirroring Abe\'s own practice of internalizing his desired persona.'
        },
        {
          title: 'Session 4: "Third-Person Self-Reference" & Intentional Integration',
          description: 'Learn and apply techniques like referring to oneself in the third person to reinforce the new persona. This session focuses on strategies to align daily actions with your new identity and embrace the transformative journey of growth.'
        },
      ];
    
      const deliverables = [
        'Adversity-to-Advantage Worksheet & Toolkit',
        'Emotional Fortitude & Mental Toughness Toolkit',
        'Limiting Belief Detachment Protocol Guide',
        'New Identity Blueprint & Mantra Creation Worksheet',
        'Support System Cultivation Guide: Strategies for building a strong "inner circle".',
        'Unlimited Email Support with "AI Abe" for the program duration.',
        'Post-Program Integration Session: A follow-up session 30 days after completion.'
      ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Resilient Identity Architect: 1-on-1 Intensive
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Cultivate unwavering resilience, transform setbacks into learning experiences, and embody a new identity by detaching from limiting beliefs.
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
              <p className='text-lg'>Ready to architect a more resilient and authentic you?</p>
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
