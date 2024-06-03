'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const imageData = [
  {
    id: '1',
    src: '/images/catcents.jpg',
    width: 800,
    height: 800,
    className: 'w-full h-full rounded-xl',
    alt: 'Hero',
  },
  {
    id: '2',
    src: '/images/catcentsHero.png',
    width: 800,
    height: 800,
    className: 'w-full h-full rounded-xl',
    alt: 'Hero',
  },
  {
    id: '3',
    src: '/images/hero2.png',
    width: 800,
    height: 800,
    className: 'w-full h-full rounded-xl',
    alt: 'Hero',
  },
];

export function CarouselDemo() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className='w-full max-w-md'>
      <CarouselContent
        style={{ transform: `translateX(-${currentItemIndex * 100}%)` }}
      >
        {imageData.map((image, index) => (
          <CarouselItem key={index}>
            <CardContent className='flex aspect-square items-center justify-center p-6 rounded-md'>
              <Image
                id={image.id}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.width}
                objectFit='cover'
                className={image.className}
              />
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
