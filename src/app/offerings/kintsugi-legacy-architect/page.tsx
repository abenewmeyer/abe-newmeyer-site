
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LegacyArchitectPage() {
  const keyBenefits = [
    'A "Golden Path" system aligning your financial success with your deepest purpose.',
    'A clear and actionable legacy plan that harmonizes wealth and values.',
    'The ability to strategically turn past setbacks into powerful advantages in your mission.',
    'Confidence that your life\'s work is creating a meaningful, enduring difference.',
    'An Annual Kintsugi Legacy Review to ensure long-term alignment and impact.',
  ];

  const whoIsThisFor = [
    'Successful executives, entrepreneurs, and investors who have achieved mastery and are now asking, "What is my lasting impact?"',
    'Individuals seeking to transition from success to significance.',
    'Philanthropists aiming to create a strategic, high-impact "golden" legacy.',
    'Family leaders dedicated to building a multi-generational story of purpose and contribution.',
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              The Kintsugi Legacy Architect: Harmonizing Purpose & Prosperity
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Align your entire life to strategically create an enduring and impactful "golden" legacy.
            </p>
          </header>

          <main className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Core Concept</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>True legacy is the final, most beautiful piece of Kintsugi art—where all the mended pieces of a life come together to create a masterpiece of impact. This exclusive, high-touch executive mentorship is the pinnacle of the Kintsugi journey. It is for those who have built their "Golden Self" and are now ready to use their resources, wisdom, and influence as the "gold" to mend, build, and create something of lasting value for the world. We will architect a strategic legacy that harmonizes your purpose and prosperity, ensuring your life's work becomes a testament to resilience, contribution, and beauty.</p>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-shimmer">Be Greater Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>This program is the ultimate expression of the "Be Greater" framework, focusing on creating a life you love and a legacy that lasts. By developing a "Golden Path" system, you will create a virtuous cycle where your actions (what you do), your enjoyment (how you do it), and your fulfillment (what you have) are all in perfect harmony. This is about creating a life that is not just successful, but significant, ensuring that what you build will "Be Greater" than yourself.</p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-shimmer">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/90 space-y-4">
                   <p>This is a six-month, deeply collaborative partnership with Abe Newmeyer. It includes intensive monthly mentorship sessions, the development of your bespoke "Golden Path" system, and an annual review to ensure your legacy remains aligned with your evolving vision. This is the highest level of strategic counsel for architecting a life of profound impact.</p>
                </CardContent>
              </Card>

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
            </div>

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
                <p><strong className="text-primary">Duration:</strong> 6-Month Bespoke Mentorship.</p>
                <p><strong className="text-primary">Includes:</strong> 6 x 2-hour monthly mentorship sessions, "Golden Path" system development, and an Annual Kintsugi Legacy Review.</p>
                <p><strong className="text-primary">Investment:</strong> $30,000</p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4 mt-12">
              <Button asChild size="lg">
                <Link href="/consult">Schedule a Free Consultation</Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" disabled>Enroll Now for $30,000</Button>
                <p className="text-xs text-muted-foreground mt-2">(Stripe Integration Coming Soon)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
