import { Play } from 'lucide-react';

const About = () => {
  return (
    <section className='bg-[#121212] py-24'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <span className='text-accent uppercase tracking-wider text-sm font-bold'>
              Who We Are
            </span>
            <h2 className='text-2xl md:text-3xl font-bold text-white mt-4 mb-8 leading-tight'>
              Every project we deliver is designed to spark positive change and
              build a stronger future for the communities we serve
            </h2>
            <p className='text-gray-400 text-lg mb-8'>
              With an emphasis on innovation, we stay ahead of the curve,
              embracing emerging trends technology and digital marketing
              methodology.
            </p>
            <div className='flex gap-4'>
              <div className='text-4xl font-bold text-white'>68%</div>
              <div className='text-gray-500 leading-tight'>
                Growth
                <br />
                Strategy
              </div>
            </div>
          </div>

          <div className='relative rounded-3xl overflow-hidden h-[500px] group cursor-pointer'>
            <img
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              alt='Team'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
              <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform'>
                <Play
                  fill='currentColor'
                  className='ml-1'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
