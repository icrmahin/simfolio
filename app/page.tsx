import Cta from "@/components/Cta";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/TestimonialCard";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <Cta />
    </>
  );
}
