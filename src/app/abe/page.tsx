
'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, User, Sparkles } from 'lucide-react';
import { askAbe, type ConversationMessage } from './actions';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function AIAbePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation]);
  
  const handleSendMessage = async () => {
    if (!input.trim() || isGenerating) return;
    
    const userMessage: ConversationMessage = { role: 'user', content: input };
    setConversation(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    try {
      const result = await askAbe(userMessage, conversation.slice(0, -1));
      if (result.success && result.answer) {
        const abeMessage: ConversationMessage = { role: 'model', content: result.answer };
        setConversation(prev => [...prev, abeMessage]);
      } else {
        const errorMessage: ConversationMessage = { role: 'model', content: result.error || 'Sorry, something went wrong.' };
        setConversation(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: ConversationMessage = { role: 'model', content: 'An unexpected error occurred. Please try again.' };
      setConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsGenerating(false);
    }
  };
  
  if (loading || !user) {
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
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">
              AI Abe
            </CardTitle>
            <CardDescription className="mt-4 text-foreground/80">
              Ask me anything about my philosophy, writings, or the "Be Greater" framework.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col h-[60vh]">
            <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 p-4 rounded-md bg-card/50">
              {conversation.length === 0 ? (
                <div className="text-center text-muted-foreground">Start the conversation...</div>
              ) : (
                conversation.map((msg, index) => (
                  <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'model' && <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />}
                    <div className={`p-4 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                      <ReactMarkdown 
                        className="prose prose-invert prose-sm"
                        components={{
                          a: ({node, ...props}) => <Link {...props} href={props.href ?? ''} className="text-primary hover:underline" target="_blank" />
                        }}
                      >{msg.content}</ReactMarkdown>
                    </div>
                    {msg.role === 'user' && <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />}
                  </div>
                ))
              )}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask a question..."
                className="flex-1"
                disabled={isGenerating}
              />
              <Button onClick={handleSendMessage} disabled={isGenerating || !input.trim()}>
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
