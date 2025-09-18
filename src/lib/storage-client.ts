
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";
import type { MediaFile } from './storage';

const staticContentMap: Record<string, { title: string; description: string }> = {
  'Abe_Neumeyer__Forging_Unwavering_Purpose_from_Unspeakable_Adversity.m4a': {
    title: 'Forging Unwavering Purpose',
    description: 'Build unwavering purpose from even the most unspeakable adversity.',
  },
  'Abe_New_Meyer__Forging_Purpose_from_Tragedy_to__Be_Greater_.m4a': {
    title: 'Purpose from Tragedy',
    description: 'A guide to transforming tragedy into a powerful purpose and becoming greater.',
  },
  'Abe_New_Meyer__Gratitude_as_a_Radical_Act_of_Resilience_and_Purpose.m4a': {
    title: 'Gratitude as Resilience',
    description: 'Learn how gratitude becomes a radical act of resilience in your life.',
  },
  'Abe_New_Meyer__Mastering_Consistency_Through__The_Sevens__and_Disciplined_Creativity.m4a': {
    title: 'Mastering Consistency',
    description: 'Unlock disciplined creativity and \'The Sevens\' to achieve mastery.',
  },
  'Abe_New_Meyer_s_Abundance_Mindset__Burning_the_Boats_of_Scarcity_for_a_Life_of__More_.m4a': {
    title: 'The Abundance Mindset',
    description: 'Burn the boats of scarcity and embrace a life of abundance.',
  },
  'Abe_New_Meyer_s_Clarity_Blueprint__Discipline,_Kaizen,_and_Superlative_Living.m4a': {
    title: 'The Clarity Blueprint',
    description: 'A blueprint for superlative living through discipline, Kaizen, and ultimate clarity.',
  },
  'Be_Greater__Abe_Newmeyer_s_Blueprint_for_Decisiveness,_Commitment,_and_Unwavering_Resilience.m4a': {
    title: 'Blueprint to Be Greater',
    description: 'Your guide to decisiveness, unwavering commitment, and building resilience.',
  },
  'Beyond_Inertia__Abe_New_Meyer_s_Roadmap_to_Action,_Execution,_and_Proactiveness.m4a': {
    title: 'Beyond Inertia',
    description: 'A roadmap to move beyond inertia into action, execution, and proactiveness.',
  },
  'From_Darkness_to__Be_Greater__Abe_Neumeyer_s_Path_to_Purpose_Through_Trauma_and_Transformation.m4a': {
    title: 'From Darkness to Greater',
    description: 'Find your path to purpose through trauma, transformation, and becoming greater.',
  },
  'From_Olridge_to_Neumeyer__Forging__Be_Greater__Through_Trauma_and_Transformation.m4a': {
    title: 'Forging a New Path',
    description: 'Explore the personal journey of transformation and forging a path to be greater.',
  },
  'From_Self-Struggle_to_Global_Service__Unpacking_Abe_New_Meyer_s_Blueprint_for_Impact_and_Altruism.m4a': {
    title: 'From Struggle to Service',
    description: 'Unpack the blueprint for turning self-struggle into impactful global service.',
  },
  'From_Trauma_to_Triumph__Abe_Neumeyer_s__Be_Greater__Framework_for_Unstoppable_Purpose.m4a': {
    title: 'From Trauma to Triumph',
    description: 'The \'Be Greater\' framework for building an unstoppable purpose after trauma.',
  },
  'Finding_Purpose_Through_Service.mp4': {
    title: 'Purpose Through Service',
    description: 'A visual exploration of how serving others can help you find purpose.',
  },
  'Scarcity_to_Abundance.mp4': {
    title: 'Scarcity to Abundance',
    description: 'Learn the key principles for shifting your mindset from scarcity to abundance.',
  },
  'The_Gratitude_Blueprint.mp4': {
    title: 'The Gratitude Blueprint',
    description: 'Follow this video blueprint to build a foundational gratitude practice in your life.',
  },
  'The_Gratitude_Journey.mp4': {
    title: 'The Gratitude Journey',
    description: 'Embark on a visual journey to discover the transformative power of daily gratitude.',
  },
  'The_Philosophy_of_Action.mp4': {
    title: 'Philosophy of Action',
    description: 'This session covers the core philosophies that will empower you to take action.',
  },
  'Wise_Up_Sessions.mp4': {
    title: 'Intro to Wise Up',
    description: 'An introduction to the Wise Up Sessions and the journey ahead.',
  },
  'Wise_Up__Consistency.mp4': {
    title: 'Wise Up: Consistency',
    description: 'A deep dive into the practice of consistency and why it\'s crucial.',
  },
};

function formatTitle(filename: string): string {
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  return nameWithoutExt
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

// Handle duplicate filenames like '... (1).m4a'
function getBaseFilename(filename: string): string {
  return filename.replace(/ \(\d+\)\.(m4a|mp4)$/, '.$1');
}

export async function getMediaFiles(): Promise<MediaFile[]> {
  const storageRef = ref(storage);
  try {
    const res = await listAll(storageRef);
    const mediaFilesPromises = res.items
      .filter(itemRef => {
        const fileExtension = itemRef.name.split('.').pop()?.toLowerCase();
        return fileExtension === 'm4a' || fileExtension === 'mp4';
      })
      .map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const fileExtension = itemRef.name.split('.').pop()?.toLowerCase();
        const type = fileExtension === 'm4a' ? 'audio' : 'video';
        
        const baseFilename = getBaseFilename(itemRef.name);
        const content = staticContentMap[baseFilename] || { 
          title: formatTitle(itemRef.name), 
          description: 'An inspiring session to help you grow.' 
        };
        
        return {
          ...content,
          url,
          type,
        };
      });

    return Promise.all(mediaFilesPromises);
  } catch (error) {
    console.error("Error fetching files from Firebase Storage:", error);
    // This error is expected if the Firebase Storage security rules are not configured correctly.
    // Returning an empty array will allow the UI to display a helpful message to the user.
    return [];
  }
}
