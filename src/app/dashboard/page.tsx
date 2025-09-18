
'use client';

import { useEffect, useState, useMemo } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { getConversations, type ConversationHistory } from './actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [conversations, setConversations] = useState<ConversationHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (user) {
      getConversations()
        .then((data) => {
          setConversations(data);
        })
        .finally(() => setIsLoading(false));
    }
  }, [user, loading, router]);

  const filteredConversations = useMemo(() => {
    if (!searchTerm) {
      return conversations;
    }
    return conversations.filter(convo => 
      convo.messages.some(msg => msg.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, conversations]);

  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full py-12 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">
              My Dashboard
            </CardTitle>
            <CardDescription className="mt-4 text-foreground/80">
              Review your past conversations with AI Abe.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search your conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            {filteredConversations.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredConversations.map((convo) => (
                  <AccordionItem key={convo.id} value={convo.id}>
                    <AccordionTrigger>
                      <div className="flex justify-between w-full pr-4">
                        <span>{convo.messages[0]?.content.substring(0, 50)}...</span>
                        <span className="text-sm text-muted-foreground">{format(convo.createdAt, 'MMM d, yyyy')}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {convo.messages.map((msg, index) => (
                          <div key={index} className={`p-4 rounded-lg ${msg.role === 'user' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                            <p className="font-bold capitalize mb-2 text-shimmer">{msg.role}</p>
                            <ReactMarkdown
                              className="prose prose-invert prose-sm"
                              components={{
                                a: ({node, ...props}) => <Link {...props} href={props.href ?? ''} className="text-primary hover:underline" target="_blank" />
                              }}
                            >{msg.content}</ReactMarkdown>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>{searchTerm ? 'No conversations found matching your search.' : 'You have no conversations with AI Abe yet.'}</p>
                <Button asChild variant="link" className="mt-4">
                  <Link href="/abe">Start a new conversation</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
