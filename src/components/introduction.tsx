import React from 'react';
import { Button } from './ui/button';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import MaxWidthWrapper from './max-width-wrapper';
import { useRouter } from 'next/navigation';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';

const Introduction = () => {
  const router = useRouter();

  const words = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;
  return (
    <section>
      <MaxWidthWrapper className='py-12 pt-24'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-3xl order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold md:text-5xl lg:text-6xl text-gray-900'>
              What we do as catcents{' '}
              <span className='relative px-2 bg-rose-600 text-white'>
                who are we ?
              </span>{' '}
            </h2>
            <div className='mt-12 flex justify-center'>
              <Button
                className='rounded-full text-2xl p-6 font-semibold'
                onClick={() => router.push('https://github.com/JaguarsCodehub')}
              >
                <ArrowUpRight className='mr-2 h-4 w-4 text-white' />
                Join our Waitlist
              </Button>
            </div>
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            {/* First User Review */}
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div>
                <Image
                  src='/images/catcents.jpg'
                  width={700}
                  height={700}
                  alt=''
                  className='rounded-md'
                />
              </div>
            </div>

            {/* second user review */}
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <Image
                src='/images/catcents.jpg'
                width={700}
                height={700}
                alt=''
                className='rounded-md'
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Introduction;
