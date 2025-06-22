import portrait from "../../assets/images/about-portrait.jpg";

export default function AboutStoryInner() {
  return (
    <div className="text-lg leading-relaxed font-sans ">
      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-left ml-10">
        My Story
      </h2>

      <img
        src={portrait}
        alt="Melody portrait"
        className="w-56 h-49 object-cover rounded-xl shadow-md border-2 border-white float-left mr-6 mb-4 "
      />

      <p className="mb-4">
        I’m a frontend developer with a story rooted in resilience, creativity,
        and transformation.
      </p>
      <p className="mb-4">
        Originally from California, I moved to Sweden to support my grandmother
        and build a life closer to my Swedish roots. Over time, I created my own
        family here, but the journey hasn’t been easy. In just a few short
        years, I experienced immense personal loss, a major separation, and the
        intense responsibility of raising two incredible children with special
        needs — all while feeling the pressure of not having financial freedom
        or a career I could truly grow in.
      </p>
      <p className="mb-4">
        That became the turning point. I decided to pivot toward a path that
        would not only support my family, but allow me to thrive creatively and
        intellectually. I discovered coding — and immediately threw myself into
        learning everything I could. Frontend development became more than just
        a skill; it became my outlet, my drive, and my focus during some of the
        most turbulent times of my life.
      </p>
      <p className="mb-4">
        What keeps me going is not just the desire to succeed, but the love I
        have for building beautiful, functional experiences that people actually
        enjoy using. I’m passionate about user interfaces that feel good, look
        good, and serve a real purpose. Whether it’s a mental health platform, a
        journaling tool, or helping someone bring their business vision to life
        — I want to be part of creating things that uplift others.
      </p>
      <p className="font-semibold italic text-center mt-8">
        If there’s one thing I’ve learned, it’s this: no matter how chaotic life
        becomes, nothing can stop me. I’ve kept going, I’ve built through the
        hardest moments, and I’m just getting started.
      </p>
    </div>
  );
}
