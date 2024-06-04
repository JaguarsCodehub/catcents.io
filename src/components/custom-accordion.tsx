import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function CustomAccordion() {
  return (
    <div className='flex p-12 lg:p-44 m-auto text-left text-wrap'>
      <Accordion
        type='single'
        collapsible
        className='w-full align-baseline text-4xl justify-items-start text-left items-start no-underline border-0'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-xl lg:text-4xl text-left'>
            What is Catcents ?
          </AccordionTrigger>
          <AccordionContent className='text-rose-500 lg:text-2xl'>
            Cat cents token ($____?) is a community-driven meme coin that
            combines humor and innovation in the world of meme
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-xl lg:text-4xl text-left'>
            What are the token Details
          </AccordionTrigger>
          <AccordionContent className='text-rose-500 lg:text-2xl'>
            $____? boasts a total supply of 10,000,000,000, tokens on the BASE
            Chain , supported by secure and transparent smart contracts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-xl lg:text-4xl text-left'>
            Why cat cents?
          </AccordionTrigger>
          <AccordionContent className='text-rose-500 lg:text-2xl'>
            Investing in cat cents provides an opportunity to join a vibrant
            community, benefit from innovative tokenomics for stability and
            rewards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger className='text-xl lg:text-4xl text-left'>
            When is the cat cents Presale?
          </AccordionTrigger>
          <AccordionContent className='text-rose-500 lg:text-2xl'>
            Stay tuned for upcoming presale/IDO announcements on official
            channels, offering a chance to participate early in cat cents
            journey, revolutionizing the crypto space with laughter and
            innovation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
