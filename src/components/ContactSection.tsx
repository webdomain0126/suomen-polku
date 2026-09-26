import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}