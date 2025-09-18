import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function SchedulePage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Calendar className="w-16 h-16 mx-auto text-primary" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">
              Consultation Scheduling
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              To schedule a one-on-one consultation with Abe Newmeyer, please fill out our pre-consultation questionnaire.
            </p>
          </div>
          <Button asChild className="mt-6">
            <Link href="/consult">Go to Questionnaire</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
