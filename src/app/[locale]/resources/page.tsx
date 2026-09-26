import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/ResourcesHero";
import ResourceCategories from "@/components/ResourceCategories";
import GrammarTopicsPreview from "@/components/GrammarTopicsPreview";
import LearningMethod from "@/components/LearningMethod";
import LearningFlow from "@/components/LearningFlow";
import CourseConnection from "@/components/CourseConnection";
import CourseFinalCta from "@/components/CourseFinalCta";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <ResourcesHero />
      <ResourceCategories />
      <GrammarTopicsPreview />
      <LearningMethod namespace="resourcesPage.banglaApproach" />
      <LearningFlow />
      <CourseConnection />
      <CourseFinalCta namespace="resourcesPage.finalCta" secondaryHref="/course" />
      <Footer />
    </>
  );
}