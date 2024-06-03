import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <section className='bg-white'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
          <div className='flex justify-center mt-8 space-x-6'>
            <SocialIcon url='https://x.com' href='https://x.com/catcentsio' />
          </div>
          <p className='mt-8 text-base leading-6 text-center text-gray-400'>
            © 2024 Catcents {''} All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
