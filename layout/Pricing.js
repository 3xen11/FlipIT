import SectionHeading from '@/src/components/SectionHeading';

const Pricing = () => {
  return (
    <section className="max-w-screen pt-20 bg-white pb-20">
      <SectionHeading heading={'Nie czekaj, zacznij naukę już teraz!'} />
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-12 gap-4 items-end">
        {/* 1 - NAJTAŃSZA OPCJA - START */}
        <div className="h-[430px] col-start-2 col-span-3  flex flex-col  bg-teal-100 rounded-xl bg-opacity-70 hover:scale-105 transition-all shadow-lg">
          <div className="bg-red-500 rounded-t-xl h-2/5"></div>
          <div className="py-2 px-8 h-3/5 flex flex-col items-center">
            <div className="h-4/5 w-full">
              <ul className="mt-3 text-sm">
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
              </ul>
            </div>
            <button className="bg-teal-400 text-sm py-2 px-4 hover:text-teal-400 hover:bg-white active:scale-95 transition-all text-white">
              Dodaj do koszyka
            </button>
          </div>
        </div>
        {/* 1 - NAJTAŃSZA OPCJA - KONIEC */}

        {/* 2 - NAJDROŻSZA OPCJA - START */}
        <div className="h-[450px] col-span-4  flex flex-col  bg-teal-600 rounded-xl bg-opacity-90 text-white hover:scale-105 transition-all shadow-lg">
          <div className="bg-red-500 rounded-t-xl h-2/5"></div>
          <div className="py-2 px-8 h-3/5 flex flex-col items-center">
            <div className="h-4/5 w-full">
              <ul className="mt-3">
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
                <li className="py-0.5">lorem ipsum</li>
              </ul>
            </div>
            <button className="bg-teal-800 text-lg py-2 px-4 hover:text-teal-800 hover:bg-white active:scale-95 transition-all">
              Dodaj do koszyka
            </button>
          </div>
        </div>
        {/* 2 - NAJDROŻSZA OPCJA - KONIEC */}

        {/* 3 - ŚREDNIA OPCJA - START */}
        <div className="h-[430px] col-span-3  flex flex-col  bg-teal-100 rounded-xl bg-opacity-70 hover:scale-105 transition-all shadow-lg">
          <div className="bg-red-500 rounded-t-xl h-2/5"></div>
          <div className="py-2 px-8 h-3/5 flex flex-col items-center">
            <div className="h-4/5 w-full">
              <ul className="mt-3 text-sm">
                <li className="py-0.5 border-b-2  border-teal-300 ">
                  lorem ipsum
                </li>
                <li className="py-0.5 border-b-2  border-teal-300 ">
                  lorem ipsum
                </li>
                <li className="py-0.5 border-b-2  border-teal-300 ">
                  lorem ipsum
                </li>
                <li className="py-0.5 border-b-2  border-teal-300 ">
                  lorem ipsum
                </li>
                <li className="py-0.5 border-b-2  border-teal-300 ">
                  lorem ipsum
                </li>
                <li className="py-0.5 border-b-2  border-teal-300 ">
                  lorem ipsum
                </li>
              </ul>
            </div>
            <button className="bg-teal-400 text-sm py-2 px-4 hover:text-teal-400 hover:bg-white active:scale-95 transition-all text-white">
              Dodaj do koszyka
            </button>
          </div>
        </div>
        {/* 3 - ŚREDNIA OPCJA - KONIEC */}
      </div>
      <p className="max-w-7xl mx-auto mt-20 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam
        assumenda dicta ipsa rem ut iure! Sint nulla, iusto necessitatibus error
        odit architecto maxime suscipit perspiciatis eaque, est voluptate.
        Autem.
      </p>
    </section>
  );
};
export default Pricing;
