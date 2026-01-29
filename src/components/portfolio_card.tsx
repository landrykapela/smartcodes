import {motion, useAnimation} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';

const PortfolioCard = ({item}: {item: any}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({
          scaleX: 1,
          transition: {duration: 0.7, ease: 'easeOut'},
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const [hovered, setHovered] = useState<boolean>(false);
  const [stretched, setStretched] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !stretched) {
        setStretched(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stretched]);

  return (
    <div
      ref={ref}
      className='group relative w-full h-64 overflow-hidden rounded-lg shadow-lg bg-gray-900'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {/* Image container aligns left */}
      <div className='flex h-full items-center justify-start'>
        <img
          src={item.img}
          alt={item.title}
          className='h-full object-cover w-full transition-transform duration-300'
          style={{
            minWidth: 0,
            transformOrigin: 'left',
            transform: stretched
              ? hovered
                ? 'scaleX(0.5)'
                : 'scaleX(1)'
              : 'scaleX(0)',
          }}
        />
      </div>
      {/* Overlay aligns right on desktop, visible by default on mobile */}
      <div className='absolute inset-0 flex items-center justify-end bg-black/60 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100'>
        <div className='mr-0 md:mr-8 md:w-5/12 w-full px-4 text-left md:text-right'>
          <h3 className='text-lg md:text-xl font-bold'>{item.title}</h3>
          <p className='text-sm text-gray-300'>{item.category}</p>
          <p className='text-xs text-gray-600 hidden md:block'>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
