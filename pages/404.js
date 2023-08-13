import Footer from '@/layout/Footer';
import Navigation from '@/layout/Navigation';
import { PageNotFoundIcon } from '@/public/svg';
import Link from 'next/link';

const error = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navigation />
      <div className=" flex flex-col grow justify-center items-center">
        <div className="h-96 w-96 mb-20">
          <PageNotFoundIcon className="h-full w-full" />
          <p className="text-center">Nie znaleziono takiej strony</p>
        </div>
        <div>
          <Link href="/" className="font-bold text-2xl cursor-pointer">
            Wróć na stronę główną
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default error;
