import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseHero from "@/components/CourseHero";
import HowItWorks from "@/components/HowItWorks";
import CurriculumSection from "@/components/CurriculumSection";
import LearningMethod from "@/components/LearningMethod";
import WhatYouGet from "@/components/WhatYouGet";
import InstructorSection from "@/components/InstructorSection";
import CoursePricing from "@/components/CoursePricing";
import CourseFinalCta from "@/components/CourseFinalCta";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <CourseHero />
      <HowItWorks />
      <CurriculumSection />
      <LearningMethod />
      <WhatYouGet />
      <InstructorSection />
      <CoursePricing />
      <CourseFinalCta />
      <Footer />
    </>
  );
}