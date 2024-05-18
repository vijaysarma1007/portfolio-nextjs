import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2030 Vijay Mohan Srirangam. All rights resvered
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> build with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend , Vercel hosting.
      </p>
    </footer>
  );
}
