// src/components/PortfolioCard.tsx 

import { Portfolio } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
 item: Portfolio
}


export const PortfolioCard:React.FC<PortfolioCardProps> = ({item}) => {

	return <Link href={"/portfolio/" +  item.slug }>
    <div className="w-full relative overflow-hidden">
      <div className='absolute bottom-0 p-5'>
        {item.title}
      </div>
      <Image className={"aspect-square object-cover hover:scale-125 transition ease-in-out duration-300"} src={item.image.src} width={item.image.width} height={item.image.height} alt={item.title} />
      </div>
  </Link>;
};
