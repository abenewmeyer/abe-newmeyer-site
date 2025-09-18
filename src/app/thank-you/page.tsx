
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
            <Card className="text-center">
                <CardHeader>
                    <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
                    <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer mt-4">
                        Thank You!
                    </CardTitle>
                    <CardDescription className="mt-4 text-lg text-foreground/80">
                        Your submission has been received. Thank you for taking the time to share your thoughtful responses. We will review your questionnaire and contact you shortly with the next steps.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80 mb-6">In the meantime, feel free to explore more resources on our site.</p>
                    <Button asChild>
                        <Link href="/">Return to Home</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
