import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import video from '../assets/_mbuni_.mp4';

const Hero = () => {
  // Video pause/play on viewport
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 1.5;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.paused) video.play();
        } else {
          if (!video.paused) video.pause();
        }
      },
      {threshold: 0.25},
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <section className='relative pt-16 pb-16 overflow-hidden min-h-screen flex items-center bg-black'>
      {/* Background Shapes (Simulated) */}
      {/* <div className='absolute top-20 right-0 w-48 h-48  rotate-45 bg-accent opacity-5' /> */}

      <div className='container mx-auto px-6 relative z-10 grid lg:grid-cols-3 gap-12 items-center'>
        <div className='space-y-8 col-span-2'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm backdrop-blur-sm'>
            <span className='w-2 h-2 bg-accent rounded-full animate-pulse' />
            Marketing Agency
          </div>

          {/* <motion.h1
            className='text-4xl md:text-7xl font-bold text-white leading-tight'
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, ease: 'easeOut'}}>
            Where Africa’s ambition
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'>
              meets hybrid marketing performance
            </span>
          </motion.h1> */}

          <div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                'Where Africa’s ambition',
                1000,
                'Meets hybrid ',
                500,
                'Marketing performance',
              ]}
              speed={50}
              style={{fontFamily: 'Outfit, Roboto', fontSize: '4em'}}
              className='font-serif'
              repeat={Infinity}
            />
          </div>

          <p className='text-gray-400 text-lg max-w-3xl animate-fade-in delay-200'>
            We’re building the future of hybrid marketing in Africa — where
            technology, culture, and strategy come together to move brands
            forward. For us, marketing isn’t just about reach, it’s about
            creating impact that resonates across African markets.
          </p>

          <div className='flex flex-wrap items-center gap-8'>
            <button className='bg-accent text-default px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent-variant transition-colors cursor-pointer'>
              Get Started <ArrowRight size={20} />
            </button>

            <div className='flex items-center gap-4'>
              <div className='flex -space-x-4'>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className='w-12 h-12 rounded-full border-2 border-[#121212] bg-gray-700 overflow-hidden'>
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt='User'
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className='text-2xl font-bold text-white'>18k+</div>
                <div className='text-sm text-gray-400'>Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative h-full items-end'>
          <video
            ref={videoRef}
            src={video}
            muted
            autoPlay
            controls
            loop></video>
        </div>
      </div>
    </section>
  );
};
export default Hero;
