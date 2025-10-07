import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white min-h-screen px-4 py-20">
      <div className="max-w-3xl mx-auto space-y-10 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold">
          Let's Connect
        </h2>
        <p className="text-lg font-inter max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          Whether you're interested in working together, have a project idea, or
          just want to say hello — I'd love to hear from you.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
