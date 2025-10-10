import BestSellers from "@/app/_components/BestSellers";
import Hero from "@/app/_components/Hero";
import AboutPage from "@/app/about/page";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
      <Contact />
    </main>
  );
}
