import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { PieChart } from '@mui/x-charts/PieChart';
import { Progress } from './ui/progress';

const TokenomicsEmbed = () => {
  return (
    <section className='grid mt-12 max-w-xl grid-cols-1 px-4 lg:mx-12 lg:max-w-none lg:grid-cols-2'>
      <div className='flex flex-col gap-4 lg:pr-8 xl:pr-20 m-0 lg:ml-24'>
        <Card className='bg-cyan-500'>
          <CardHeader>
            <CardTitle className='text-4xl text-white font-bold'>
              $CATC
            </CardTitle>
            <CardDescription className='font-semibold text-xl text-black'>
              Token Supply: 10,000,000,000
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-xl text-white'>
                Pre Sale (45%)
              </Label>
              <Progress value={45} />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-xl text-white'>
                Liquidity Pool (30%)
              </Label>
              <Progress value={30} />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-xl text-white'>
                Airdrop (5%)
              </Label>
              <Progress value={5} />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-xl text-white'>
                Project Development (10%)
              </Label>
              <Progress value={10} />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-xl text-white'>
                Marketing (10%)
              </Label>
              <Progress value={10} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='sm:mb-24 flex flex-col mb-12 lg:mt-0'>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 45 },
                { id: 1, value: 30 },
                { id: 2, value: 5 },
                { id: 3, value: 10 },
                { id: 4, value: 10 },
              ],
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          height={500}
          // width={350}
          // className='w-[300px] h-[150px] lg:w-[500px] lg:h-[350px]'
        />
      </div>
    </section>
  );
};

export default TokenomicsEmbed;
