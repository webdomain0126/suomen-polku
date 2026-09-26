import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMission from "@/components/AboutMission";
import LearningMethod from "@/components/LearningMethod";
import LearningFlow from "@/components/LearningFlow";
import JourneyPath from "@/components/JourneyPath";
import InstructorSection from "@/components/InstructorSection";
import WhyList from "@/components/WhyList";
import CourseOverview from "@/components/CourseOverview";
import CoursePricing from "@/components/CoursePricing";
import CourseFinalCta from "@/components/CourseFinalCta";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <AboutMission />
      <LearningMethod namespace="aboutPage.teachingPhilosophy" />
      <LearningFlow namespace="aboutPage.learningApproach" />
      <JourneyPath />
      <InstructorSection />
      <WhyList namespace="aboutPage.whyUs" />
      <CourseOverview />
      <CoursePricing />
      <CourseFinalCta namespace="aboutPage.finalCta" secondaryHref="/course" />
      <Footer />
    </>
  );
}