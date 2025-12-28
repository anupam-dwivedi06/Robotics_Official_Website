// import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import About from './Components/About'
import NewSponsor from './Components/NewSponsor';

import Participant from './Components/Participant';
import PastEventText from './Components/PastEventText';
import PastEvent from './Components/PastEvent';
import PeopleSay from './Components/PeopleSay';
import SponRelay from './Components/SponRelay';
import Footer from './Components/Footer';
import AuroraWave from "./Components/AuroraWave"


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <NewSponsor />
      <PastEvent />
      <PastEventText />
      <Participant />

      {/* <PeopleSay /> */}
      <SponRelay />
      <Footer />
      <AuroraWave />
    </>
  );
}
