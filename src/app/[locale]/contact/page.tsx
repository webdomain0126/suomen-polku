import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import LearningMethod from "@/components/LearningMethod";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <ContactHero />
      <ContactSection />
      <FaqSection />
      <LearningMethod namespace="contactPage.teachingLanguage" />
      <Footer />
    </>
  );
}