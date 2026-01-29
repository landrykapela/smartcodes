import type { FormEvent } from 'react';

type ContactProps = {
  open: boolean;
  onClose: () => void;
};

export default function Contact({open, onClose}: ContactProps) {
  if (!open) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Replace with real submit logic (API, email, etc.)
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    console.log('Contact form submitted:', Object.fromEntries(data.entries()));
    onClose();
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-black/60'
        onClick={onClose}
        aria-hidden
      />

      <div className='relative bg-[#0f1724] rounded-lg shadow-xl w-full max-w-lg mx-4 p-6'>
        <div className='flex items-start justify-between mb-4'>
          <h3 className='text-xl font-bold'>Get in touch</h3>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-white'
            aria-label='Close contact form'>
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'>
          <div>
            <label className='block text-sm text-gray-300'>Name</label>
            <input
              name='name'
              required
              className='mt-1 w-full rounded-md bg-[#0b1220] border border-gray-700 px-3 py-2 text-white'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300'>Email</label>
            <input
              name='email'
              type='email'
              required
              className='mt-1 w-full rounded-md bg-[#0b1220] border border-gray-700 px-3 py-2 text-white'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300'>Phone</label>
            <input
              name='phone'
              type='tel'
              placeholder='+255 000 000 000'
              className='mt-1 w-full rounded-md bg-[#0b1220] border border-gray-700 px-3 py-2 text-white'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300'>Message</label>
            <textarea
              name='message'
              rows={4}
              required
              className='mt-1 w-full rounded-md bg-[#0b1220] border border-gray-700 px-3 py-2 text-white'
            />
          </div>

          <div className='flex items-center justify-end gap-3'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 rounded-md bg-transparent border border-gray-700 text-gray-300'>
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 rounded-md bg-accent text-default font-bold'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
