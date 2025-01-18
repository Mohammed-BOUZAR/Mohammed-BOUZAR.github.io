import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full  flex-col items-center justify-between pb-20 bg-[url('/bg-pattern.svg')] bg-fixed bg-cover dark:bg-black">
      <FloatingNav navItems={navItems} className="md:w-full" />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      {/* <Skills /> */}
      {/* <Education /> */}
      <Certifications />
      {/* <Languages /> */}
      {/* <Interests /> */}
      {/* <References /> */}
      <Achievements />
      {/* <Publications /> */}
      {/* <Conferences /> */}
      {/* <Workshops /> */}
      {/* <Volunteering /> */}
      {/* <Hobbies /> */}
      {/* <Contact /> */}
      <Footer />
      <BackgroundBeams />
      <BackgroundBeams />
      <BackgroundBeams />
    </main>
  );
}
