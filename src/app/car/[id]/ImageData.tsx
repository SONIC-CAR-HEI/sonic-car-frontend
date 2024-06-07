'use client';
import './style.css';
import { PropsWithChildren } from 'react';
import { useQuery } from 'react-query';
import Slider, { Settings } from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { apiProvider } from '@/src/provider/api-provider';

interface Props {
  id: string;
}

export const ImageData = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ['get-car-images', id],
    queryFn: () => apiProvider.carImage.getCarImagesUrl(id),
  });

  const settings: Settings = {
    infinite: true,
    lazyLoad: 'anticipated',
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: (
      <Button>
        <ChevronRight size="2rem" />
      </Button>
    ),
    prevArrow: (
      <Button left>
        <ChevronLeft size="2rem" />
      </Button>
    ),
  };

  return (
    <div className="w-[75%] h-full flex-shrink flex p-5 relative">
      {
        <div className="w-full bg-zinc-900 h-full rounded-xl overflow-hidden relative">
          <Slider {...settings} dots>
            {data?.map((v) => (
              <img
                alt=""
                key={v.id}
                src={v.imageUrl}
                className="w-full h-full object-cover"
              />
            ))}
          </Slider>
        </div>
      }
    </div>
  );
};

const Button = ({
  children,
  left,
  ...rest
}: PropsWithChildren<{ left?: boolean }>) => {
  return (
    <button
      {...rest}
      className={
        'absolute top-[50%] z-[10] text-white ' +
        (left ? 'left-[1rem]' : 'right-[1rem]')
      }
    >
      {children}
    </button>
  );
};
