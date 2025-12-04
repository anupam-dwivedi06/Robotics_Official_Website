import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import About from './Components/About'
import NewSponsor from './Components/NewSponsor';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NewSponsor />
    </>
  );
}
