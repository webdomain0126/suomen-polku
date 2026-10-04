import { Lesson } from "./types";
import { personalPronounsLesson } from "./personalPronouns";
import { finnishAlphabetLesson } from "./finnishAlphabet";
import { ollaLesson } from "./olla";
import { presentTenseLesson } from "./presentTense";
import { verbTypes12Lesson } from "./verbTypes12";
import { verbType3Lesson } from "./verbType3";
import { verbType4Lesson } from "./verbType4";

// Lesson content, looked up by month + slug. When a new lesson is added,
// register its content here AND its stable ID in lessonRegistry.ts.
export const lessons: Lesson[] = [
  personalPronounsLesson,
  finnishAlphabetLesson,
  ollaLesson,
  presentTenseLesson,
  verbTypes12Lesson,
  verbType3Lesson,
  verbType4Lesson,
];

export function getLesson(month: number, slug: string): Lesson | undefined {
  return lessons.find((l) => l.month === month && l.slug === slug);
}