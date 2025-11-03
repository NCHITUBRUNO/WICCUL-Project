import Hero from '../components/Hero';
import Services from '../components/Services';
// import About from '../components/About';
import Benefits from '../components/Benefits';
//import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      {/* Not Required Here
      <About />
      */}
      <Benefits />
      {/* Not Required Here
      <Contact />
      */}
    </>
  );
}
