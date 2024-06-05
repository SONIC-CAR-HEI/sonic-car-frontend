import { DashHorizon } from '@/src/assets/fonts/dash-horizon';
import Img from 'next/image';
import Link from 'next/link';

export const AppLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Img
        src="/car-logo.png"
        alt=""
        width="277"
        height="277"
        className="w-16 h-16"
      />
      <span
        className={
          DashHorizon.className + ' font-extrabold text-4xl select-none'
        }
      >
        Car Dealer
      </span>
    </Link>
  );
};
