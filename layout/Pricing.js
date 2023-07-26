import SectionHeading from '@/src/components/SectionHeading';
import { BsPlusCircle } from 'react-icons/bs';

const Pricing = () => {
  return (
    <section className="max-w-screen pt-20 bg-white pb-20">
      <SectionHeading heading={'Nie czekaj, zacznij naukę już teraz!'} />
      <div className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row  justify-around items-center lg:items-end">
        {/* 2 - NAJDROŻSZA OPCJA - START */}
        <div className="lg:order-2 w-80 xl:w-96 bg-[url('/svg/pricingCardBackgroundDark.svg')] bg-cover h-[450px]  p-4  flex flex-col items-center relative bg-opacity-90 text-white hover:scale-105 transition-all shadow-lg">
          <div className="bg-teal-500 h-14 flex justify-center px-8 items-center left-1/2 -translate-x-1/2 xl:translate-x-0  xl:top-8 xl:-left-8 absolute font-bold ">
            <p className="tracking-widest">PREMIUM</p>
          </div>
          <div className="flex  w-full mt-24 justify-around ">
            <div className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700">
              <BsPlusCircle className="h-8 w-8 " />
            </div>
            <div className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700">
              <BsPlusCircle className="h-8 w-8 " />
            </div>
            <div className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700">
              <BsPlusCircle className="h-8 w-8 " />
            </div>
          </div>
          <ul className="leading-8 mt-4 w-full tracking-wide">
            <li>a. lorem ipsum dolor sit amet</li>
            <li>b. lorem ipsum dolor sit amet</li>
            <li>c. lorem ipsum dolor sit amet</li>
            <li>d. lorem ipsum dolor sit amet</li>
            <li>e. lorem ipsum dolor sit amet</li>
          </ul>
          <button className="mt-4 py-4 w-3/5 bg-teal-700 active:scale-95 transition-all hover:bg-white hover:text-teal-700">
            Dodaj do koszyka
          </button>
        </div>
        {/* 2 - NAJDROŻSZA OPCJA - KONIEC */}

        {/* 3 - ŚREDNIA OPCJA - START */}
        <div className="lg:order-1 h-[440px] w-80 my-12 lg:my-0 p-4  flex flex-col items-center relative bg-[url('/svg/pricingCardBackgroundLight.svg')] bg-cover bg-opacity-90 text-white hover:scale-105 transition-all shadow-lg">
          <div className="bg-teal-800 h-14 flex justify-center px-8 items-center left-1/2 -translate-x-1/2 xl:translate-x-0  xl:top-8 xl:-left-8  absolute font-bold ">
            <p className="tracking-widest">STANDARD</p>
          </div>
          <div className="flex  w-full mt-24 justify-around ">
            <div className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700">
              <BsPlusCircle className="h-8 w-8 " />
            </div>
            <div className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700">
              <BsPlusCircle className="h-8 w-8 " />
            </div>
          </div>
          <ul className="leading-8 mt-4 w-full tracking-wide">
            <li>a. lorem ipsum dolor sit amet</li>
            <li>b. lorem ipsum dolor sit amet</li>
            <li>c. lorem ipsum dolor sit amet</li>
            <li>d. lorem ipsum dolor sit amet</li>
            <li>e. lorem ipsum dolor sit amet</li>
          </ul>
          <button className="mt-4 py-4 w-3/5 bg-teal-700 active:scale-95 transition-all hover:bg-white hover:text-teal-700">
            Dodaj do koszyka
          </button>
        </div>
        {/* 3 - ŚREDNIA OPCJA - KONIEC */}
        {/* 1 - NAJTAŃSZA OPCJA - START */}
        <div className="lg:order-3 h-[440px] w-80  p-4  flex flex-col items-center relative bg-[url('/svg/pricingCardBackgroundLight.svg')] bg-cover bg-opacity-90 text-white hover:scale-105 transition-all shadow-lg">
          <div className="bg-teal-800 h-14 flex justify-center px-8 items-center left-1/2 -translate-x-1/2 xl:translate-x-0  xl:top-8 xl:-left-8  absolute font-bold ">
            <p className="tracking-widest">BASIC</p>
          </div>
          <div className="flex  w-full mt-24 justify-around ">
            <div className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700">
              <BsPlusCircle className="h-8 w-8 " />
            </div>
          </div>
          <ul className="leading-8 mt-4 w-full tracking-wide">
            <li>a. lorem ipsum dolor sit amet</li>
            <li>b. lorem ipsum dolor sit amet</li>
            <li>c. lorem ipsum dolor sit amet</li>
            <li>d. lorem ipsum dolor sit amet</li>
            <li>e. lorem ipsum dolor sit amet</li>
          </ul>
          <button className="mt-4 py-4 w-3/5 bg-teal-700 active:scale-95 transition-all hover:bg-white hover:text-teal-700">
            Dodaj do koszyka
          </button>
        </div>
        {/* 1 - NAJTAŃSZA OPCJA - KONIEC */}
      </div>
      <p className="max-w-7xl mx-auto mt-20 text-center px-12 xl:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam
        assumenda dicta ipsa rem ut iure! Sint nulla, iusto necessitatibus error
        odit architecto maxime suscipit perspiciatis eaque, est voluptate.
        Autem.
      </p>
    </section>
  );
};
export default Pricing;
