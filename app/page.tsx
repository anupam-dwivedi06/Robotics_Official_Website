import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import About from './Components/About'
import NewSponsor from './Components/NewSponsor';

import PastEventText from './Components/PastEventText';
import PastEvent from './Components/PastEvent';
import PeopleSay from './Components/PeopleSay';
import SponRelay from './Components/SponRelay';
import Footer from './Components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NewSponsor />
      <PastEvent />
      <PastEventText />

      <PeopleSay />
      <SponRelay />
      <Footer />
    </>
  );
}
