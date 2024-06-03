'use client';

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import RunningString from '@/components/running-string';
import { CarouselDemo } from '@/components/carousel';
import { useRouter } from 'next/navigation';
import { CustomAccordion } from '@/components/custom-accordion';
import TokenTicker from '@/components/token-ticker';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-4 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl'>
                The base network will be more fun with {''}
                <span className='bg-rose-500 text-white'>CatCents.</span>
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Catcents is a Hybrid DeFi (SPL-404) project on Solana CatCents
                brings together the NFT and meme coin communities, offering lots
                of potential.
              </p>

              <div className='flex flex-row pt-4 items-center justify-end'>
                <Button className=''>Mint NFT Now !</Button>
                <Button className='ml-4 bg-rose-500 text-white hover:bg-rose-800'>
                  Join our Waitlist
                </Button>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-2 flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20'>
            <div className='relative max-w-5xl md:max-w-3xl'>
              {/* <img
                src='/images/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              /> */}
              <img
                src='/images/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />

              <CarouselDemo />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>{' '}
      <section>
        <RunningString />
      </section>
      <section id='about'>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-4 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-full lg:col-span-2 flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20'>
            <div className='relative max-w-5xl md:max-w-3xl'>
              <img
                src='/images/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />

              <Image
                src='/images/hero2.png'
                width={500}
                height={500}
                alt='Image'
              />
            </div>
          </div>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-xl md:text-3xl lg:text-3xl'>
                In the world of crypto projects, there was a little cat named
                CatCents, known for its super speed. Three friends found
                CatCents and decided to give it a chance to shine.
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                After saving CatCents, it became a star! It appeared in movies,
                games, and even big sports events (or at least, we think so –
                its a bit fuzzy).
              </p>

              <div className='flex flex-row pt-4 items-center justify-end'>
                <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                  But CatCents is not just famous – it is also a symbol of fun
                  and possibility in the crypto world. With its charm and speed,
                  CatCents has become a favorite among crypto fans.
                </p>
              </div>

              <h2 className='mt-12 font-semibold text-2xl'>
                Join us on this{' '}
                <span className='bg-rose-500 text-white'>
                  adventure with CatCents
                </span>{' '}
                – it is just the beginning of something great!
              </h2>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section id='tokenticker'>
        <div className='flex flex-col items-center justify-normal p-12'>
          <h1 className='text-5xl lg:text-7xl font-semibold'>Tokenomics 💰</h1>
        </div>
        <TokenTicker />
      </section>
      <section id='faq'>
        <div className='flex flex-col items-center justify-normal p-12'>
          <h1 className='text-2xl lg:text-5xl font-semibold'>
            Frequently Asked Questions 🤔
          </h1>
        </div>
        <CustomAccordion />
      </section>
    </div>
  );
}
