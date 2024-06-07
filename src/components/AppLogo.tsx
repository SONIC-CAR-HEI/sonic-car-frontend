import { Syne } from 'next/font/google';
import Link from 'next/link';

const logoFont = Syne({
  subsets: ['latin'],
  weight: '800',
});

export const AppLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 py-3">
      <span
        className={logoFont.className + ' font-extrabold text-2xl select-none'}
      >
        CarDealer
      </span>
    </Link>
  );
};
