// import { cn } from '@/utils/cn';
import React from 'react';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import Image from 'next/image';

export function BentoGridDemo() {
  return (
    <BentoGrid className='max-w-4xl mx-auto'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          //   description={item.description}
          header={item.header}
          //   icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: (
      <Image
        src='/images/catcents.jpg'
        width={500}
        height={500}
        className='w-full h-full'
        alt='Hero'
      />
    ),
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
  },
];
