import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Service from "@/components/Home/Service";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Contact />
    </main>
  );
}
