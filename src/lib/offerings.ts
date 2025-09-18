
export interface Offering {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: '1-on-1';
    highlights?: string[];
    sortOrder: number;
}
  
export const offerings: Offering[] = [
    {
        slug: 'purpose-precision-blueprint',
        title: 'How To Get What You Want: The Purpose Precision Blueprint',
        tagline: "Define one's unique purpose and establish a precise roadmap to achieve desired goals.",
        description: "This intensive experience provides a laser-like precision in identifying one's unique 'why,' ensuring every decision moves individuals closer to their destiny.",
        category: '1-on-1',
        sortOrder: 1,
        highlights: [
            'Uncover your authentic purpose, moving beyond societal expectations.',
            'Craft a clear, concise, and compelling purpose statement.',
            'Learn and apply a powerful decision-making filter to align daily actions.',
            'Personalized sessions to inventory existing skills, resources, and strengths.',
        ]
    },
    {
        slug: 'unwavering-spirit-immersion',
        title: 'Enjoy Getting It: The Unwavering Spirit & Gratitude Immersion',
        tagline: 'Cultivate resilience and mindset to make the journey of achievement enjoyable.',
        description: "This program provides personalized strategies for developing the capacity to recover quickly from life's inevitable challenges and integrate daily gratitude practices for sustained positivity.",
        category: '1-on-1',
        sortOrder: 2,
        highlights: [
            'Develop mental toughness and reframe obstacles into opportunities.',
            'Integrate daily gratitude practices to identify "bright spots".',
            'Learn methods for navigating and growing through difficult times.',
            'Learn to see life\'s "fractures" as opportunities for "golden repair".',
        ]
    },
    {
        slug: 'identity-architect-legacy-foundation',
        title: 'Love What You Have: The Identity Architect & Legacy Foundation',
        tagline: 'Embody your ideal self and cultivate profound appreciation for your current life.',
        description: "This program empowers clients to consciously embody their ideal self, detach from limiting beliefs, and cultivate profound appreciation for their current life, relationships, and existing resources as the foundation for their future legacy.",
        category: '1-on-1',
        sortOrder: 3,
        highlights: [
            'Identify and release limiting beliefs to craft a new identity blueprint.',
            'Develop a powerful, self-affirming mantra.',
            'Deeply identify and appreciate personal gifts, talents, and relationships.',
            'Align daily actions with your new, architected identity.',
        ]
    },
    {
        slug: 'legacy-ascendant',
        title: "The Purpose Architect's Grand Design: The Legacy Ascendant",
        tagline: 'A year-long, immersive mentorship to achieve unparalleled alignment, impact, and an enduring legacy.',
        description: "The culmination of the 'Be Greater' framework, this program integrates all pillars into a holistic, year-long transformation, positioning wealth and resources as tools for a higher calling.",
        category: '1-on-1',
        sortOrder: 4,
        highlights: [
            '12 Monthly Two-Hour One-on-One Executive Mentorship Sessions.',
            'Align financial strategies with your defined purpose.',
            'Develop a personalized, multi-generational legacy-building framework.',
            'Continuous VIP priority communication and support.',
        ]
    }
];
