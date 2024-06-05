import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { DashHorizon } from '@/src/assets/fonts/dash-horizon';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  return (
    <div
      id="contact-us"
      className="relative py-8 w-full flex flex-col items-center from-50% to-50% bg-gradient-to-tr from-zinc-900 to-transparent before:absolute bfrom-zinc-900 before:w-full before:h-full before:bg-gradient-to-tl before:top-0 before:from-50% before:to-50% before:-z-[1] before:from-zinc-900 before:to-transparent"
    >
      <h2 className={DashHorizon.className + ' text-3xl font-bold'}>
        Contact us
      </h2>
      <div className="w-full flex items-center justify-between">
        <div className="text-white w-[16rem] flex flex-col items-center justify-center">
          <span className="text-xl">Follow us</span>
          <div className="flex gap-3 items-center">
            <Facebook fontSize="large" />
            <LinkedIn fontSize="large" />
            <Instagram fontSize="large" />
          </div>
        </div>
        <ContactForm />
        <div className="w-[16rem]">
          <div className="mr-20 relative">
            <p className="absolute right-0 text-white whitespace-nowrap text-2xl">
              Search, Buy, Drive !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
