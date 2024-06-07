import Img from 'next/image';
import { SearchSection } from './search-section';
import { ContactSection } from './ContactSection';
import { Header } from '@/src/components/Header';
import { CarCarousel } from '@/src/components/car-carousel';

export const Home = () => {
  return (
    <div>
      <Img
        alt=""
        src="/asphalt.jpg"
        width="900"
        height="599"
        className="w-full h-full fixed -z-10 object-cover opacity-10"
      />
      <Header />
      <CarCarousel />
      <SearchSection />
      <ContactSection />
    </div>
  );
};
