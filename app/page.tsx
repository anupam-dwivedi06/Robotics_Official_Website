import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import About from './Components/About'
import NewSponsor from './Components/NewSponsor';

import Footer from './Components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NewSponsor />

      <Footer />
    </>
  );
}
