import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CourseOverview from "@/components/CourseOverview";
import JourneyPath from "@/components/JourneyPath";
import FeatureGrid from "@/components/FeatureGrid";
import NewsGrid from "@/components/NewsGrid";
import ResourceTeaser from "@/components/ResourceTeaser";
import InstructorSection from "@/components/InstructorSection";
import WhyList from "@/components/WhyList";
import PricingPreview from "@/components/PricingPreview";
import FinalCta from "@/components/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <Hero />
      <CourseOverview />
      <JourneyPath />
      <FeatureGrid />
      <NewsGrid />
      <ResourceTeaser />
      <InstructorSection />
      <WhyList />
      <PricingPreview />
      <FinalCta />
      <Footer />
    </>
  );
}