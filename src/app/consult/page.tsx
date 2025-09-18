
'use client';

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitConsultation } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  purposeClarity: z.string({ required_error: 'Please select a rating.' }),
  biggestChallenge: z.string().min(1, 'This field is required'),
  challengeTransformation: z.string().min(1, 'This field is required'),
  idealSelf: z.string().min(1, 'This field is required'),
  commitmentLevel: z.string({ required_error: 'Please select a rating.' }),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 'step-1', fields: ['firstName', 'lastName'] as const, title: 'Your Contact Information' },
  { id: 'step-2', fields: ['email', 'phone'] as const, title: 'How can we reach you?' },
  { id: 'step-3', fields: ['purposeClarity'] as const, title: 'Clarity of Purpose' },
  { id: 'step-4', fields: ['biggestChallenge'] as const, title: 'Biggest Challenge' },
  { id: 'step-5', fields: ['challengeTransformation'] as const, title: 'Challenge Transformation' },
  { id: 'step-6', fields: ['idealSelf'] as const, title: 'Your Ideal Self' },
  { id: 'step-7', fields: ['commitmentLevel'] as const, title: 'Commitment Level' },
];

export default function ConsultationPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPending, startTransition] = useTransition();
    const [serverError, setServerError] = useState<string | null>(null);

    const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
    });
    
    const processForm: SubmitHandler<FormValues> = (data) => {
      startTransition(async () => {
          const result = await submitConsultation(data);
          if (result?.type === 'error') {
              setServerError(result.message);
          }
      });
    };

    type FieldName = keyof FormValues;

    const next = async () => {
      const fields = steps[currentStep].fields;
      const output = await trigger(fields as FieldName[], { shouldFocus: true });
  
      if (!output) return;
  
      if (currentStep < steps.length - 1) {
        setCurrentStep(step => step + 1);
      }
    };
  
    const prev = () => {
      if (currentStep > 0) {
        setCurrentStep(step => step - 1);
      }
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-shimmer">
              Abe Newmeyer: Pre-Consultation Questionnaire
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Thank you for your interest in a free 15-minute Clarity Consult. To make our conversation as focused and impactful as possible, please take a few moments to reflect on and answer the following questions. Your candid responses will help us understand your unique journey and how the 'Be Greater' framework can support you in getting what you want, enjoying getting it, and loving what you have. Please complete this questionnaire to proceed.
            </p>
          </header>

          <main className="bg-card p-8 rounded-lg shadow-lg">
            <div className="mb-8">
                <p className="text-sm font-medium text-shimmer text-center">Step {currentStep + 1} of {steps.length}</p>
                <Progress value={progress} className="mt-2" />
            </div>

            <form onSubmit={handleSubmit(processForm)} className="space-y-8">
              <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
              {currentStep === 0 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-lg">First Name</Label>
                    <Input id="firstName" {...register('firstName')} />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-lg">Last Name</Label>
                    <Input id="lastName" {...register('lastName')} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email Address</Label>
                    <Input id="email" type="email" {...register('email')} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" {...register('phone')} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <Label className="text-lg">On a scale of 1-10 (1 being completely unclear, 10 being crystal clear), how well defined is your overarching life's purpose or 'why' right now?</Label>
                  <RadioGroup {...register('purposeClarity')} className="flex flex-wrap gap-4">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                      <div key={value} className="flex items-center space-x-2">
                          <RadioGroupItem value={String(value)} id={`purposeClarity-${value}`} />
                          <Label htmlFor={`purposeClarity-${value}`}>{value}</Label>
                      </div>
                      ))}
                  </RadioGroup>
                  {errors.purposeClarity && <p className="text-red-500 text-sm">{errors.purposeClarity.message}</p>}
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-2">
                  <Label htmlFor="biggestChallenge" className="text-lg">Reflecting on key areas such as your finances, career, health, or spirit, what is the single biggest challenge or feeling of unfulfillment you are currently experiencing, despite any external successes?</Label>
                  <Textarea id="biggestChallenge" {...register('biggestChallenge')} rows={5} />
                  {errors.biggestChallenge && <p className="text-red-500 text-sm">{errors.biggestChallenge.message}</p>}
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-2">
                  <Label htmlFor="challengeTransformation" className="text-lg">When faced with significant setbacks, failures, or personal difficulties, how effectively do you typically transform these challenges into opportunities for growth and deeper strength?</Label>
                  <Textarea id="challengeTransformation" {...register('challengeTransformation')} rows={5} />
                  {errors.challengeTransformation && <p className="text-red-500 text-sm">{errors.challengeTransformation.message}</p>}
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-2">
                  <Label htmlFor="idealSelf" className="text-lg">If you could consciously 'embody a new identity'—a transformed version of yourself—what three key qualities, behaviors, or outcomes would define that ideal self who moves with intention and focus?</Label>
                  <Textarea id="idealSelf" {...register('idealSelf')} rows={5} />
                  {errors.idealSelf && <p className="text-red-500 text-sm">{errors.idealSelf.message}</p>}
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-4">
                  <Label className="text-lg">On a scale of 1-10 (1 being low commitment, 10 being absolutely all-in), how committed are you to investing the necessary time, energy, and resources into achieving deep, lasting transformation in your life?</Label>
                  <RadioGroup {...register('commitmentLevel')} className="flex flex-wrap gap-4">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                      <div key={value} className="flex items-center space-x-2">
                          <RadioGroupItem value={String(value)} id={`commitmentLevel-${value}`} />
                          <Label htmlFor={`commitmentLevel-${value}`}>{value}</Label>
                      </div>
                      ))}
                  </RadioGroup>
                  {errors.commitmentLevel && <p className="text-red-500 text-sm">{errors.commitmentLevel.message}</p>}
                </div>
              )}
              </motion.div>
              </AnimatePresence>
            </form>

            {serverError && <p className="text-red-500 text-sm text-center mt-4">{serverError}</p>}

            <div className="mt-8 pt-5">
                <div className="flex justify-between">
                    <Button
                        type="button"
                        onClick={prev}
                        disabled={currentStep === 0}
                        variant="outline"
                    >
                        Go Back
                    </Button>
                    {currentStep < steps.length - 1 ? (
                        <Button type="button" onClick={next}>
                            Next Step
                        </Button>
                    ) : (
                        <Button
                          type="submit"
                          onClick={handleSubmit(processForm)}
                          disabled={isPending}
                        >
                          {isPending ? 'Submitting...' : 'Submit & Proceed to Scheduling'}
                        </Button>
                    )}
                </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
