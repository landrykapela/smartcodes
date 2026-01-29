import vyb from '../assets/vybe.png';
import Johnson from '../assets/johnson.webp';
import Sebo from '../assets/sebo.webp';
import Beatrice from '../assets/beatrice.webp';
import Edwin from '../assets/edwin.webp';
import TeamCard from './team_card';

const Team = () => {
  const items = [
    {
      name: 'Edwin',
      position: 'Chief Executive Officer',
      img: Edwin,
    },
    {
      name: 'Beatrice',
      position: 'Managing Director',
      img: Beatrice,
    },
    {
      name: 'Sebo',
      position: 'Strategist',
      img: Sebo,
    },
    {
      name: 'Johnson',
      position: 'BTL Manager',
      img: Johnson,
    },
  ];

  return (
    <section
      id='team'
      className='bg-dark py-24'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between mb-12'>
          <h2 className='text-4xl font-bold text-white'>Our Team</h2>
          <div className='h-[1px] bg-white/10 flex-1 ml-12 hidden md:block'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          {items.map((item, idx) => (
            <TeamCard
              key={idx}
              item={item}
            />
          ))}
        </div>

        <div className='text-center mt-20'>
          <button className='border border-white/20 text-white px-8 py-4 rounded-full hover:bg-accent hover:text-default hover:border-accent transition-all font-semibold'>
            View All Team Members
          </button>
        </div>
      </div>
      {/* No extra style needed for shrink animation */}
    </section>
  );
};
export default Team;
