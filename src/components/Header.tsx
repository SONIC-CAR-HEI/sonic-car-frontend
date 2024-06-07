import Link from 'next/link';
import { Syne } from 'next/font/google';
import { AppLogo } from './AppLogo';

const syneFont = Syne({
  subsets: ['latin'],
  weight: '700',
  fallback: ['sans-serif'],
});

export const Header = () => {
  return (
    <header className="sticky top-0 z-[1000] px-3 flex items-center justify-between bg-zinc-900 text-white text-lg">
      <AppLogo />
      <div
        className={
          syneFont.className + ' font-bold flex items-center gap-2 pr-2'
        }
      >
        <Link href="/#contact-us" className="p-1">
          Contact us
        </Link>
        <Link href="/#about-us" className="p-1">
          About us
        </Link>
      </div>
    </header>
  );
};
