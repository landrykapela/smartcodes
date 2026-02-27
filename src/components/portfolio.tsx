import vyb from '../assets/vybe.png';
import stanbic from '../assets/standbic.png';
import nmb from '../assets/nmb.png';
import precision from '../assets/precision.png';
import PortfolioCard from './portfolio_card';


const Portfolio = () => {
  const items = [
    {
      title: 'Vodacom Vyb Campaign',
      category: 'Marketing',
      img: vyb,
      description:
        'Vodacom Youth Base (VYB) is a Vodacom Tanzania platform designed for young Tanzanians aged 15–28, aiming to empower them through tailored digital benefits. Using the tagline "Your Network is Your Networth," it offers free SMS, discounted bundles/devices, career-building tools, and networking opportunities',
    },
    {
      title: 'Tap Kibingwa Ushinde',
      category: 'Marketing',
      img: stanbic,
      description:
        'The Stanbic "Tap Kibingwa Ushinde" campaign is a 2025 initiative by Stanbic Bank Tanzania designed to promote cashless payments and reward customers for using their Visa Debit Cards',
    },
    {
      title: 'Umebima Billboard',
      category: 'Media',
      img: nmb,
      description:
        'The NMB Umebima campaign is a nationwide insurance literacy and awareness drive in Tanzania launched by NMB Bank to boost the low insurance uptake (1.6% to 5% penetration).',
    },
    {
      title: 'Precision Air',
      category: 'Creative',
      img: precision,
      description:
        'Precision Air is a Tanzanian airline that operates domestic and regional flights in East Africa, known for its commitment to safety, reliability, and customer service.',
    },
  ];
  // const PortfolioCard = ({item}: {item: any}) => {
  //   return (
  //     <div className='group'>
  //       <div className='relative w-full h-[400px] mb-6 rounded-2xl overflow-hidden bg-black'>
  //         <img
  //           src={item.img}
  //           alt={item.title}
  //           className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-x-75 z-0'
  //           style={{transformOrigin: 'left'}}
  //         />
  //         {/* Overlay with title/category on hover */}
  //         <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
  //           <h3 className='text-3xl font-bold mb-2'>{item.title}</h3>
  //           <span className='text-gray-300 uppercase tracking-widest text-lg'>
  //             {item.category}
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <section
      id='portfolio'
      className='bg-dark py-24'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between mb-12'>
          <h2 className='text-4xl font-bold text-white'>Featured Work</h2>
          <div className='h-[1px] bg-white/10 flex-1 ml-12 hidden md:block'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          {items.map((item, idx) => (
            <PortfolioCard
              key={idx}
              item={item}
            />
          ))}
        </div>

        <div className='text-center mt-20'>
          <button className='border border-white/20 text-white px-8 py-4 rounded-full hover:bg-accent hover:text-default hover:border-accent transition-all font-semibold'>
            View All Projects
          </button>
        </div>
      </div>
      {/* No extra style needed for shrink animation */}
    </section>
  );
};
export default Portfolio;
