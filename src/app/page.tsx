import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
