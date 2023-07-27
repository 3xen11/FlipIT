const AppFlashCard = () => {
  return (
    <div className=" bg-[url('/svg/pricingCardBackgroundDark.svg')] bg-cover relative w-screen  sm:w-4/5 lg:w-3/5 max-w-xl h-80 rounded-xl  flex items-center justify-center overflow-hidden transition-all hover:shadow-lg hover:transform hover:-rotate-1 hover:scale-110">
      <p className="font-bold text-xl text-white">Pytanie</p>
      <div className="flex items-center absolute -rotate-45 w-full h-full p-5 box-border bg-white opacity-0 transition-all hover:opacity-100 hover:rotate-0">
        <p className="card__description mt-2.5 text-sm text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </div>
  );
};
export default AppFlashCard;
