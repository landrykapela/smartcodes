

const Stats = () => {
  return (
    <section className='bg-[#171717] py-20 border-y border-white/5'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {[
            {num: '25K', label: 'Projects Completed'},
            {num: '8K', label: 'Happy Customers'},
            {num: '15', label: 'Years Experience'},
            {num: '98', label: 'Awards Achievement'},
          ].map((stat, i) => (
            <div key={i}>
              <div className='text-5xl font-bold text-white mb-2'>
                {stat.num}
              </div>
              <div className='text-gray-500 uppercase text-sm tracking-wider'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
