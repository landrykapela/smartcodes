import './index.css';
import {useEffect, useState} from 'react';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import About from './components/about';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';
import Team from './components/team';
import Contact from './components/contact';
import CookieBanner from './components/CookieBanner';

// --- Main App ---

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setContactOpen(true);
    window.addEventListener('openContact', openHandler as EventListener);
    return () =>
      window.removeEventListener('openContact', openHandler as EventListener);
  }, []);

  return (
    <div className='font-sans antialiased bg-[#121212] min-h-screen text-white selection:bg-accent selection:text-black'>
      <Navbar />
      <main>
        <Hero />
        {/* <Features /> */}
        <Services />
        <Portfolio />
        <Team />
        <About />
        <Stats />
      </main>
      <Footer />
      {/* <Chatbot /> */}
      <Contact
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <CookieBanner />
    </div>
  );
}
