import AppFlashCard from '@/src/components/AppFlashCard';
import { getRandomNumber } from '@/src/features/questions/questionsSlice';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const Application = () => {
  const dispatch = useDispatch();

  const { chosenTechnologyArrayLength } = useSelector(
    (store) => store.question
  );

  return (
    <section className="max-w-screen  mt-10 py-20 text-center">
      <p className="mb-4 font-bold">
        Pozostałe pytania: {chosenTechnologyArrayLength}
      </p>
      <div className="max-w-7xl w-full flex flex-col justify-between items-center mx-auto p-5 ">
        <AppFlashCard />

        <div className="flex mt-10 flex justify-around w-full sm:w-4/5 md:w-3/5 lg:w-1/2 ">
          <button className=" flex justify-center">
            <BsXCircle
              onClick={() => dispatch(getRandomNumber())}
              className="h-14 w-14 hover:text-red-500 transition-all hover:scale-105 active:scale-95"
            />
          </button>
          <button className=" flex justify-center">
            <BsCheckCircle
              onClick={() => dispatch(getRandomNumber())}
              className="h-14 w-14 hover:text-teal-500 transition-all hover:scale-105 active:scale-95"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Application;
