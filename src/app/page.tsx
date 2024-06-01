'use client';

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Check, Linkedin, Phone, Star } from 'lucide-react';
import Image from 'next/image';

// import './page.module.css';
import RunningString from '@/components/running-string';
import { CarouselDemo } from '@/components/carousel';
import { BentoGridDemo } from '@/components/bento-grid-demo';
import { useRouter } from 'next/navigation';
import Introduction from '@/components/introduction';
import { CustomAccordion } from '@/components/custom-accordion';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-4 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                {/* <img src='/snake-1.png' className='w-full' /> */}
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl'>
                The Solana just became a lot more{' '}
                <span className='bg-rose-500 text-white'>Alabama.</span>
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                YeeHaw is a Hybrid DeFi (SPL-404) project on Solana
                <span className='font-semibold'>one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <div className='flex flex-row pt-4 items-center justify-end'>
                <Button className=''>Mint NFT Now !</Button>
                <Button className='ml-4 bg-rose-500 text-white'>
                  Join our Waitlist
                </Button>
              </div>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/images/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/images/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/images/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/images/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/images/users/user-5.jpg'
                    alt='user image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-rose-600 fill-rose-600' />
                    <Star className='h-4 w-4 text-rose-600 fill-rose-600' />
                    <Star className='h-4 w-4 text-rose-600 fill-rose-600' />
                    <Star className='h-4 w-4 text-rose-600 fill-rose-600' />
                    <Star className='h-4 w-4 text-rose-600 fill-rose-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-2 flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20'>
            <div className='relative max-w-5xl md:max-w-3xl'>
              {/* <img
                src='/images/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <img
                src='/images/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              /> */}
              {/* <Image
                src='/images/catcents.jpg'
                width={500}
                height={500}
                className='w-fit h-fit'
                alt='Hero'
              /> */}
              <CarouselDemo />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>{' '}
      <section>
        <RunningString />
      </section>
      <section>
        <Introduction />
      </section>
      <section>
        <section className='bg-slate-100 grainy-dark py-10'>
          <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
            <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
              <h2 className='mt-8 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Checkout our {''}
                <span className='bg-rose-600 text-white '>catcents</span> NFT
              </h2>

              {/* <img src='/snake-2.png' className='w-24 order-0 lg:order-2' /> */}
              {/* <p className='order-0 lg:order-2'>
                YeeHaw NFT has a fixed value of $YEEHAW Coins. You can swap the
                NFT for coins, and vice versa, increasing the liquidity of both
                assets.
              </p> */}
            </div>

            <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-y-16'>
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
              {/* third  user review */}
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
          </MaxWidthWrapper>
        </section>
      </section>
      <section>{/* <BentoGridDemo /> */}</section>
      <section className='flex p-24 m-auto items-center justify-center'>
        <CustomAccordion />
      </section>
    </div>
  );
}
