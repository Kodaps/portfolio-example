

import { PortfolioCard } from '@/components/PortfolioCard';
import { allPortfolios } from 'contentlayer/generated';
import Image from 'next/image';

export default async function PortfolioIndex() {

  const items = allPortfolios;

  return <section className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold py-5">Portfolio Index</h1>
      <div className="p-4 md:p-0 grid grid-cols-3 gap-4 w-full">
        {items.map((item, index) => <PortfolioCard key={index} item={item} />)}
      </div>
    </section>;
}