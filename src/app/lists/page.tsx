
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import trainingData from '@/lib/training-data.json';
import { cn } from '@/lib/utils';
import { categorizeList } from '@/ai/flows/categorize-list-flow';
import { Loader2 } from 'lucide-react';

interface ListItem {
  title: string;
  content: string;
  categories?: string[];
  slug?: string;
}

export default function MyListsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [lists, setLists] = useState<ListItem[]>(
    trainingData.map(item => ({
      ...item,
      slug: item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    }))
  );
  const [categorizedIndices, setCategorizedIndices] = useState<Set<number>>(new Set());
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    const categorizeAllLists = async () => {
      const promises = lists.map((list, index) => {
        if (!categorizedIndices.has(index)) {
          return categorizeList({ title: list.title, content: list.content }).then((result) => ({
            index,
            categories: result.categories,
          }));
        }
        return Promise.resolve(null);
      });

      const results = await Promise.all(promises);
      
      setLists(prevLists => {
        const newLists = [...prevLists];
        results.forEach(result => {
          if (result) {
            newLists[result.index] = { ...newLists[result.index], categories: result.categories };
          }
        });
        return newLists;
      });

      setCategorizedIndices(prev => {
        const newSet = new Set(prev);
        results.forEach(result => {
          if (result) {
            newSet.add(result.index);
          }
        });
        return newSet;
      });

      setIsLoadingCategories(false);
    };

    categorizeAllLists();
  }, []);

  const filteredLists = useMemo(() => {
    if (!searchTerm) {
      return lists;
    }
    return lists.filter(list =>
      list.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.categories?.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, lists]);

  const cardColorClasses = [
    'bg-card text-card-foreground',
    'bg-primary text-primary-foreground',
    'bg-white text-zinc-900',
  ];

  const titleColorClasses = [
    'text-shimmer',
    'text-primary-foreground',
    'text-primary',
  ]

  const descriptionColorClasses = [
    'text-card-foreground/80',
    'text-primary-foreground/80',
    'text-zinc-600',
  ];


  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-shimmer">
            My Lists
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
            A searchable archive of gratitude lists and reflections.
          </p>
        </header>

        <main className="max-w-7xl mx-auto">
          <div className="mb-8 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search by title, content, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLists.length > 0 ? (
              filteredLists.map((list, index) => (
                <Card key={index} id={list.slug} className={cn('flex flex-col', cardColorClasses[index % 3])}>
                  <CardHeader>
                    <CardTitle className={cn('text-2xl font-headline', titleColorClasses[index % 3])}>
                      {list.title}
                    </CardTitle>
                    <CardDescription className={cn(
                      'h-6 flex items-center', // Set a fixed height and center content
                       descriptionColorClasses[index % 3]
                    )}>
                      {list.categories ? list.categories.join(' • ') : (
                        <span className="flex items-center gap-2">
                           <Loader2 className="w-4 h-4 animate-spin" /> Categorizing...
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap h-48 overflow-y-auto">{list.content}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-foreground/80">
                <p>No lists found matching your search.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
