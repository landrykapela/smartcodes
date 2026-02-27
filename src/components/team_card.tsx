import {useAnimation} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';

const TeamCard = ({item}: {item: any}) => {
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
      className='group relative w-full h-120 overflow-hidden rounded-lg shadow-lg bg-gray-900'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {/* Image container aligns left */}
      <div className='flex h-full items-center justify-start'>
        <img
          src={item.img}
          alt={item.name}
          className='h-full object-cover w-full transition-transform duration-300'
          style={{
            minWidth: 0,
            transformOrigin: 'top',
            transform: stretched
              ? hovered
                ? 'scaleY(0.8)'
                : 'scaleY(1)'
              : 'scaleY(0)',
          }}
        />
      </div>
      {/* Overlay aligns bottom left; visible on mobile, hover on md+ */}
      <div className='absolute inset-0 flex items-end justify-start bg-black/60 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100'>
        <div className='text-left mb-6 ml-4 md:mb-8 md:ml-8 w-full md:w-auto p-4 md:p-0'>
          <h3 className='text-lg md:text-xl font-bold'>{item.name}</h3>
          <p className='text-sm text-gray-300'>{item.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
