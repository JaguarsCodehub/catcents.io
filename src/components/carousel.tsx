import * as React from 'react';

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
    className: 'w-full h-full',
    alt: 'Hero',
  },
  {
    id: '2',
    src: '/images/catcents.jpg',
    width: 800,
    height: 800,
    className: 'w-full h-full',
    alt: 'Hero',
  },
  {
    id: '3',
    src: '/images/catcents.jpg',
    width: 800,
    height: 800,
    className: 'w-full h-full',
    alt: 'Hero',
  },
];

export function CarouselDemo() {
  return (
    <Carousel className='w-full max-w-md'>
      <CarouselContent>
        {imageData.map((image, index) => (
          <CarouselItem key={index}>
            {/* <div className='p-1'> */}
            {/* <Card> */}
            <CardContent className='flex aspect-square items-center justify-center p-6'>
              <Image
                id={image.id}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.width}
                objectFit='cover'
              />
            </CardContent>
            {/* </Card> */}
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
