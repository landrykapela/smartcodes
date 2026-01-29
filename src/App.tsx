import './index.css';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import About from './components/about';
import Chatbot from './components/chatbot';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';
import Team from './components/team';



// --- Main App ---

export default function App() {
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
      <Chatbot />
    </div>
  );
}
