const AppFlashCard = ({ index, technologyArray, maxIndex }) => {
  function formatAnswer(answer) {
    if (!answer) {
      return null;
    }

    const lines = answer
      .split('\n')
      .map((line, index) => (
        <p key={index}>
          {line.trim().startsWith('- ') ? (
            <li>• {line.trim().slice(2)}</li>
          ) : (
            line
          )}
        </p>
      ));

    return <ul>{lines}</ul>;
  }

  return (
    <div className="grid col-start-2">
      <div className="bg-[url('/svg/pricingCardBackgroundDark.svg')] bg-cover relative w-screen sm:w-4/5 lg:w-full max-w-xl mx-auto rounded-xl flex items-center justify-center overflow-hidden transition-all hover:shadow-lg hover:transform hover:scale-110 h-80">
        <p className="font-bold text-xl text-white text-center px-4">
          {maxIndex
            ? technologyArray[index]?.question
            : 'Gratulacje, znasz już odpowiedzi na wszystkie pytania!'}
        </p>
        <div className="flex items-center absolute -rotate-45 w-full h-full p-5 box-border bg-white opacity-0 transition-all hover:opacity-100 hover:rotate-0">
          <div
            className={`card__description mt-2.5 text-center w-full text-slate-700 leading-6 ${
              technologyArray[index]?.answer &&
              technologyArray[index]?.answer.length > 300
                ? 'text-sm'
                : 'text-base'
            }`}
          >
            {maxIndex
              ? formatAnswer(technologyArray[index]?.answer)
              : 'Spróbuj teraz kolejnej kategorii!'}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppFlashCard;
