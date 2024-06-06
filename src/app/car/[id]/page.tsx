'use client';
import { InfoCase } from './InfoCase';
import { ImageData } from './ImageData';
import { AppLogo } from '@/src/components/AppLogo';

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function CarInfoPage({ params: { id } }: Props) {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="sticky top-0 z-[1000] px-3 flex items-center bg-zinc-900 text-white text-lg">
        <AppLogo />
      </header>
      <div className="flex w-full h-full">
        <ImageData id={id} />
        <InfoCase id={id} />
      </div>
    </div>
  );
}
