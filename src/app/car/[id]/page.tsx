'use client';
import { notFound } from 'next/navigation';
import { useQuery } from 'react-query';
import { InfoCase } from './InfoCase';
import { AppLogo } from '@/src/components/AppLogo';
import { apiProvider } from '@/src/provider/api-provider';
import { ImageData } from './ImageData';

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function CarInfoPage({ params: { id } }: Props) {
  const { data } = useQuery({
    queryKey: ['get-car-info', id],
    queryFn: async () => {
      const carData = await apiProvider.car.get(id);
      const carImages = await apiProvider.carImage.getCarImagesUrl(id);
      const brand = await apiProvider.brand.get(carData.id);
      const type = await apiProvider.carType.get(carData.id);
      return { carData, carImages, brand, type };
    },
  });

  if (!data) return notFound();

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full">
          <header>
            <AppLogo />
          </header>
          <ImageData />
        </div>
        <InfoCase data={data} />
      </div>
    </div>
  );
}
