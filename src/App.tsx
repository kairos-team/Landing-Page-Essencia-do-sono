import { About } from './sections/About';
import { Audience } from './sections/Audience';
import { Differential } from './sections/Differential';
import { FaqSection } from './sections/FaqSection';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Plans } from './sections/Plans';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { Testimonials } from './sections/Testimonials';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <About />
        <Differential />
        <Audience />
        <Plans />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
