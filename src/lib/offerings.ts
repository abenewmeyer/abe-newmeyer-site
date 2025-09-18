
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
        slug: 'purpose-impact-blueprint',
        title: 'Phase 1: How to Get What You Want (1-on-1 Intensive)',
        tagline: "Define one's unique purpose and establish a precise roadmap to achieve desired goals.",
        description: "This intensive experience provides a laser-like precision in identifying one's unique 'why,' ensuring every decision moves individuals closer to their destiny.",
        category: '1-on-1',
        sortOrder: 1,
        highlights: [
            'Gain laser-like clarity on your unique life purpose and overarching "why", providing crystal-clear direction and building confidence.',
            'Develop a clear, concise, and compelling personal purpose statement, committing it to memory to constantly remind you of your direction.',
            "Learn and apply Abe's powerful \"Filter Question\" to align daily decisions and opportunities with your long-term destiny, enabling proactive choices.",
            'Craft a strategic action plan to leverage your unique gifts and resources, including financial acumen, as tools to achieve your higher calling and leave a meaningful legacy.',
            'Identify and monetize unrecognized expertise, moving beyond traditional income models to create new streams that fund your purpose.'
        ]
    },
    {
        slug: 'resilient-identity-architect',
        title: 'Phase 2: Enjoy Getting It (1-on-1 Intensive)',
        tagline: 'Cultivate resilience and mindset to make the journey of achievement enjoyable.',
        description: "This program provides personalized strategies for developing the capacity to recover quickly from life's inevitable challenges and integrate daily gratitude practices for sustained positivity.",
        category: '1-on-1',
        sortOrder: 2,
        highlights: [
            "Cultivate unwavering resilience to recover quickly from life's inevitable challenges, consistently choosing to push forward and learn from setbacks.",
            "Transform adversity into advantage by reframing obstacles and finding growth opportunities, even in the darkest moments, drawing on Abe's personal journey.",
            "Detach from limiting beliefs and past patterns that no longer serve your purpose, inspired by Abe's radical self-reinvention.",
            "Consciously step into and personify your ideal new identity, developing a clear vision of who you want to become and moving with intention and focus.",
            "Develop emotional fortitude and mental toughness, inspired by Abe's hard-won wisdom from overcoming major depression, addiction, and profound personal losses.",
            "Learn to embrace discomfort and the \"peculiar\" feelings associated with shedding old layers, recognizing them as vital signs of personal growth and transformation."
        ]
    },
    {
        slug: 'gratitude-alchemist',
        title: 'Phase 3: Love What You Have (1-on-1 Intensive)',
        tagline: 'Embody your ideal self and cultivate profound appreciation for your current life.',
        description: "This program empowers clients to consciously embody their ideal self, detach from limiting beliefs, and cultivate profound appreciation for their current life, relationships, and existing resources as the foundation for their future legacy.",
        category: '1-on-1',
        sortOrder: 3,
        highlights: [
            "Integrate daily gratitude practices for sustained positivity, shifting your mindset to make it \"nearly impossible to have a 'bad' day\".",
            "Learn to identify, appreciate, and enthusiastically embrace the \"bright spots\" in any situation, cultivating a profound sense of contentment.",
            "Shift your mindset to consciously reframe challenges into opportunities for growth and eager anticipation, moving away from dread and towards possibility.",
            "Develop personalized habit-stacking and consistency techniques to seamlessly integrate gratitude into existing routines and maintain long-term well-being.",
            "Cultivate a deep appreciation for everything you have in your life, both big and small, leading to greater fulfillment and a sense of abundance.",
            "Embrace imperfections and find beauty in brokenness, applying the philosophy of Kintsugi to transform challenges into sources of strength and meaning."
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
