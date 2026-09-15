import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Featured from './components/Featured.jsx';
import Experience from './components/Experience.jsx';
import Catering from './components/Catering.jsx';
import Reviews from './components/Reviews.jsx';
import Visit from './components/Visit.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import MobileActionBar from './components/MobileActionBar.jsx';
import FloatingOrderButton from './components/FloatingOrderButton.jsx';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Intro />
        <Featured />
        <Experience />
        <Catering />
        <Reviews />
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
      <FloatingOrderButton />
    </>
  );
}
