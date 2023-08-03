const AppFlashCard = ({ index, technologyArray, maxIndex }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[url('/svg/pricingCardBackgroundDark.svg')] bg-cover relative w-screen  sm:w-4/5 lg:w-3/5 max-w-xl h-80 rounded-xl  flex items-center justify-center overflow-hidden transition-all hover:shadow-lg hover:transform  hover:scale-110">
        <p className="font-bold text-xl text-white text-center px-4">
          {maxIndex
            ? technologyArray[index].question
            : 'Gratulacje, znasz już odpowiedzi na wszystkie pytania!'}
        </p>
        <div className="flex items-center absolute -rotate-45 w-full h-full p-5 box-border bg-white opacity-0 transition-all hover:opacity-100 hover:rotate-0">
          <p className="card__description mt-2.5 text-sm text-center w-full text-slate-700 leading-6 text-xl">
            {maxIndex
              ? technologyArray[index].answer
              : 'Spróbuj teraz kolejnej kategorii!'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AppFlashCard;
