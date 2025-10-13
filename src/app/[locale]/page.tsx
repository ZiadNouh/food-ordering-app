import BestSellers from "@/app/[locale]/_components/BestSellers";
import Hero from "@/app/[locale]/_components/Hero";
import AboutPage from "@/app/[locale]/about/page";
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
