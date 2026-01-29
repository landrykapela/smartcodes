import { ArrowUpRight, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-[#121212] pt-24 pb-10 border-t border-white/5'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center text-center mb-20'>
          <h2 className='text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter'>
            Get started <span className='text-[#999] opacity-50'>now</span>
          </h2>
          <button className='bg-accent text-black px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center gap-3'>
            Let's Contact <ArrowUpRight />
          </button>
        </div>

        <div className='grid md:grid-cols-4 gap-12 border-t border-white/10 pt-16'>
          <div className='col-span-1 md:col-span-1'>
            <div className='text-xl font-bold text-white mb-4'>
              Dar es salaam
            </div>
            <p className='text-gray-500'>
              346 Senga Road, Mikocheni,
              <br />
              Dar es salaam
            </p>
          </div>
          <div className='col-span-1 md:col-span-1'>
            <div className='text-xl font-bold text-white mb-4'>
              South Africa
            </div>
            <p className='text-gray-500'>
              98th Street. Johannesburg,
              <br />
              Gauteng 2092, South Africa
            </p>
          </div>
          <div className='col-span-1 md:col-span-2'>
            <form className='flex border-b border-white/20 pb-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='bg-transparent w-full text-2xl text-white outline-none placeholder:text-gray-600'
              />
              <button
                type='submit'
                className='text-accent'>
                <ArrowRight size={32} />
              </button>
            </form>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/5 text-gray-600 text-sm'>
          <p>© 2024 – 2025 | All rights reserved by CrowdyTheme</p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <a
              href='#'
              className='hover:text-white'>
              About Us
            </a>
            <a
              href='#'
              className='hover:text-white'>
              Privacy Policy
            </a>
            <a
              href='#'
              className='hover:text-white'>
              Career
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;