import { BsPlusCircle } from 'react-icons/bs';

const ShoppingCardPremium = ({
  id,
  shoppingPackage,
  content,
  openAvailableTechnologiesModal,
}) => {
  return (
    <div
      key={id}
      className=" w-80 xl:w-96 bg-[url('/svg/pricingCardBackgroundDark.svg')] bg-cover h-[450px]  p-4  flex flex-col items-center relative bg-opacity-90 text-white hover:scale-105 transition-all shadow-lg"
    >
      <div className="bg-teal-500 h-14 flex justify-center px-8 items-center left-1/2 -translate-x-1/2 xl:translate-x-0  xl:top-8 xl:-left-8 absolute font-bold ">
        <p className="tracking-widest uppercase">{shoppingPackage}</p>
      </div>
      <div className="flex  w-full mt-24 justify-around ">
        <div
          className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700"
          onClick={() => openAvailableTechnologiesModal()}
        >
          <BsPlusCircle className="h-8 w-8" />
        </div>
        <div
          className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700"
          onClick={() => openAvailableTechnologiesModal()}
        >
          <BsPlusCircle className="h-8 w-8" />
        </div>
        <div
          className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-700"
          onClick={() => openAvailableTechnologiesModal()}
        >
          <BsPlusCircle className="h-8 w-8" />
        </div>
      </div>
      <ul className="leading-8 mt-4 w-full tracking-wide">
        {content.map((c) => {
          return <li key={id}>{c}</li>;
        })}
      </ul>
      <button className="mt-4 py-4 w-3/5 bg-teal-700 active:scale-95 transition-all hover:bg-white hover:text-teal-700">
        Dodaj do koszyka
      </button>
    </div>
  );
};
export default ShoppingCardPremium;
