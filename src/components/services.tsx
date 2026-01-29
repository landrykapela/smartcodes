import React from 'react';
import {
  ChessKnight,
  Server,
  Sun,
  Balloon,
  Megaphone,
  UserStar,
  ArrowRight,
} from 'lucide-react';


const Services = () => {
  const services = [
    {
      title: 'Strategy',
      description:
        'We craft effective strategies driven by insights, ensuring tangible results from your target audience.',
      icon: <ChessKnight />,
    },
    {
      title: 'Digital Footprints',
      description:
        'We create, develop and manage your digital and online platforms and make sure you reach millions through interactive and...',
      icon: <Server />,
    },
    {
      title: 'Creatives',
      description:
        'We turn curiosity and passion into creative work that makes a lasting difference.',
      icon: <Sun />,
    },
    {
      title: 'Events & Activations',
      description:
        'We craft intelligent, tech-driven events that connect your brand with its audience in meaningful ways.',
      icon: <Balloon />,
    },
    {
      title: 'Media',
      description:
        'We strategically leverage media to convey the perfect message to the intended audience, all within the confines of the allocated budget.',
      icon: <Megaphone />,
    },
    {
      title: 'Public Relations',
      description:
        'We strengthen and protect your brand’s reputation by strategically leveraging trusted voices and platforms to build lasting customer confidence',
      icon: <UserStar />,
    },
  ];

  return (
    <section className='bg-dark py-24'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between md:items-center items-end mb-16 gap-8'>
          <div>
            <span className='text-accent uppercase tracking-wider text-sm font-bold'>
              Services
            </span>
            <h2 className='text-4xl md:text-5xl font-bold text-white mt-4'>
              Strategy. &nbsp; Marketing. &nbsp; Excellency
            </h2>
          </div>
          <button className='text-white border-b border-accent pb-1 hover:text-accent transition-colors'>
            View All Services
          </button>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((item, idx) => (
            <div
              key={idx}
              className='group p-10 rounded-3xl bg-dark-variant md:flex justify-center items-center md:items-start gap-6 hover:bg-black transition-colors relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors' />
              <div className='p-4 rounded-xl bg-dark text-white group-hover:text-accent mx-auto'>
                {React.cloneElement(item.icon as React.ReactElement, {
                  
                })}
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-400 mb-6'>
                  We approach each project with meticulous attention to detail
                  and best quality.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:text-accent'>
                  Explore Service <ArrowRight className='ml-2 w-4 h-4' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;