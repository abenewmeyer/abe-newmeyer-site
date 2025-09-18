
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Mail, CalendarCheck, CheckCircle } from 'lucide-react';
import { offerings } from '@/lib/offerings';
import { getMediaFiles } from '@/lib/storage-client';
import type { MediaFile } from '@/lib/storage';
import { MediaGrid } from '@/components/media-grid';
import { subscribeToList } from './actions';
import Autoplay from "embla-carousel-autoplay"

const featuredOfferings = offerings.sort((a,b) => a.sortOrder - b.sortOrder).slice(0, 4);

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Signing Up...' : 'Sign Up'}
    </Button>
  );
}

export default function Home() {
  const [mediaState, setMediaState] = useState<{ allFiles: MediaFile[], audioFiles: MediaFile[] }>({ allFiles: [], audioFiles: [] });
  const [formState, formAction] = useFormState(subscribeToList, { message: '', success: false });
  const formRef = useRef<HTMLFormElement>(null);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  useEffect(() => {
    async function loadMedia() {
      const allFiles = await getMediaFiles();
      const audioFiles = allFiles.filter((file) => file.type === 'audio');
      setMediaState({ allFiles, audioFiles });
    }
    loadMedia();
  }, []);
  
  useEffect(() => {
    if (formState.success) {
      formRef.current?.reset();
    }
  }, [formState]);

  const testimonials = [
    { name: "John D., CEO", quote: "Abe's insights have been a game-changer for my leadership style. His sessions are practical, profound, and immediately applicable." },
    { name: "Sarah P., Tech Lead", quote: "The 'Wise Up Sessions' are my go-to for a morning motivation boost. Abe has a unique way of simplifying complex ideas." },
    { name: "A Longtime Friend", quote: "I've known Abe for over 20 years. He's been coaching people his whole life, just without the official title. He has a genuine gift for helping people find their path." },
    { name: "Michael B., Entrepreneur", quote: "Working with Abe has unlocked a new level of focus and fulfillment in my professional life. I can't recommend him enough." },
    { name: "Jessica M., Product Manager", quote: "The frameworks Abe teaches are powerful. I've seen a tangible difference in my team's motivation and my own clarity." },
    { name: "Childhood Friend", quote: "For years, Abe was the person our friends would call when they were stuck. It's incredible to see him now sharing that same wisdom with a wider audience. He's the real deal." },
    { name: "David R., Founder", quote: "A truly transformative experience. Abe has a gift for cutting through the noise and getting to the heart of what matters." },
    { name: "Emily T., Consultant", quote: "I was skeptical at first, but the 'Be Greater' framework has fundamentally changed how I approach my goals." },
    { name: "Maria G., Creative Director", quote: "Abe's coaching is direct, insightful, and incredibly effective. He helps you see the gold within your own story." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white bg-background">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Inspirational background"
          fill
          priority
          data-ai-hint="inspirational landscape"
          className="object-cover -z-10 brightness-50"
        />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl font-headline tracking-tight">
              Your Journey to Growth and Fulfillment Starts Here
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80">
              Unlock your potential with Abe Newmeyer's proven strategies for personal and professional development.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/consult">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wise Up Sessions Preview */}
      <section id="sessions" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">Wise Up Sessions</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive into a curated collection of audio and video sessions designed to inspire, challenge, and elevate your perspective.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl pt-12">
            <MediaGrid files={mediaState.audioFiles} limit={8} />
          </div>
          {mediaState.allFiles.length > 8 && (
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/sessions">View All Sessions</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Premium Offerings Preview */}
      <section id="offerings" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">Explore Our Transformative Programs</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our premium coaching programs designed to help you architect a life of purpose and resilience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 pt-12 sm:grid-cols-1 md:grid-cols-2">
            {featuredOfferings.map((offering) => (
              <Card key={offering.slug} className="h-full flex flex-col bg-card text-card-foreground">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-shimmer">{offering.title}</CardTitle>
                  <CardDescription className="text-foreground/80 pt-2 italic">{offering.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                    <ul className="space-y-3 text-left mb-6">
                        {offering.highlights?.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-foreground/90">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                  <Button asChild className="w-full">
                    <Link href={`/offerings/${offering.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/offerings">View All Offerings</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline text-shimmer">Recent Reviews</h2>
          <div className="py-12">
            <Carousel
              plugins={[plugin.current]}
              opts={{ align: "start", loop: true }}
              className="w-full max-w-5xl mx-auto"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.reset()}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between text-center bg-card text-foreground">
                        <CardHeader>
                          <CardDescription className="text-foreground/80 text-base">"{testimonial.quote}"</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-base font-bold text-shimmer">- {testimonial.name}</CardTitle>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Daily Gratitude Reminder */}
      <section className="w-full py-12 md:py-24 bg-background text-foreground">
        <div className="container">
          <Card className="bg-card/30 border-primary/20 max-w-4xl mx-auto">
            <CardHeader className="p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left w-full">
                  <Mail className="w-12 h-12 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-shimmer font-headline text-2xl">Daily Gratitude Reminder</CardTitle>
                    <CardDescription className="text-foreground/80 mt-1">
                      Sign up to receive a daily reminder to pause and reflect on what you're grateful for.
                    </CardDescription>
                  </div>
                </div>
                <form ref={formRef} action={formAction} className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
                  <div className="w-full sm:w-1/3">
                    <Input name="firstName" type="text" placeholder="First Name" required className="bg-card text-card-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <Input name="email" type="email" placeholder="Enter your email" required className="bg-card text-card-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div className="w-full sm:w-auto">
                    <SubmitButton />
                  </div>
                </form>
              </div>
               {formState?.message && (
                <p className={`mt-4 text-center text-sm ${formState.success ? 'text-green-600' : 'text-red-600'}`}>
                  {formState.message}
                </p>
              )}
            </CardHeader>
          </Card>
        </div>
      </section>
      
      {/* Free 15-Minute Consult */}
      <section className="w-full pt-12 pb-24 md:pb-32 bg-background">
        <div className="container">
          <Card className="bg-card/30 border-primary/20 max-w-4xl mx-auto">
            <CardHeader className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left p-8">
              <CalendarCheck className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="flex-1">
                <CardTitle className="text-shimmer font-headline text-2xl">Schedule a Free 15-Minute Consult</CardTitle>
                <CardDescription className="text-foreground/80 mt-1">
                  Ready to take the next step? Sign up to schedule a complimentary consultation with Abe.
                </CardDescription>
              </div>
              <Button asChild>
                 <Link href="/consult">Schedule</Link>
              </Button>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
}
