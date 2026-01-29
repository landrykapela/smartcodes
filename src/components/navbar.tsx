import {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';
import logo from '../assets/sc-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-2' : 'bg-transparent py-2'}`}>
      <div className='container  border-b-accent border-b-1 mx-auto px-6 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold text-white flex items-center gap-1'>
          <img
            src={logo}
            alt='smart codes logo h-12'
            className='w-logo'
          />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-8 text-white/80 font-medium'>
          {['Home', 'About', 'Portfolio', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                if (item === 'Contact') {
                  window.dispatchEvent(new CustomEvent('openContact'));
                  return;
                }
                const id = item.toLowerCase();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({behavior: 'smooth'});
              }}
              className='hover:text-accent transition-colors'>
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className='hidden lg:block'>
          <button className='group flex items-center gap-2 bg-accent text-default px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105' >
            Let's Talk
            <ArrowUpRight className='w-5 h-5 transition-transform group-hover:rotate-45' />
          </button>
        </div> */}

        {/* Mobile Toggle */}
        <button
          className='lg:hidden text-white'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-dark border-t border-white/10 p-6 flex flex-col gap-4 lg:hidden'>
          {['Home', 'About', 'Portfolio', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                if (item === 'Contact') {
                  window.dispatchEvent(new CustomEvent('openContact'));
                  return;
                }
                const id = item.toLowerCase();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({behavior: 'smooth'});
              }}
              className='text-xl text-white font-medium hover:text-accent'>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
