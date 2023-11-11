import { useDispatch, useSelector } from 'react-redux';

import AppFlashCard from '@/src/components/AppFlashCard';
import AvailableTechnologiesModal from '@/src/components/AvailableTechnologiesModal';
import KnownUnknownButtons from '@/src/components/KnownUnknownButtons';

import {
  markAsKnown,
  getRandomIndex,
  getTechnologyArray,
  getQuestionId,
} from '@/src/features/questions/questionSlice';
import { useEffect } from 'react';

const Application = () => {
  const { index, technologyArray, maxIndex } = useSelector(
    (store) => store.question
  );

  const dispatch = useDispatch();

  useEffect(() => {
    maxIndex && dispatch(getQuestionId(technologyArray[index]?.id));
  }, [index, maxIndex]);

  return (
    <section className="max-w-screen grow -mt-14 py-20 text-center">
      <div className="scale-75">
        <AvailableTechnologiesModal getTechnologyArray={getTechnologyArray} />
      </div>
      <p className="m-10  font-bold">Pozostałe pytania: {maxIndex}</p>
      <div className="grid grid-cols-3">
        <AppFlashCard
          index={index}
          technologyArray={technologyArray}
          maxIndex={maxIndex}
        />
        {technologyArray[index]?.bonus && (
          <div className="bg-white w-3/4 ml-5 shadow-lg relative ">
            <div className="bg-white transition-all w-full h-72 mt-8  absolute  hover:opacity-0 text-center ">
              <p className="mt-28">
                Najedź żeby sprawdzić dodatkowe informacje
              </p>
            </div>
            <h5 className="text-xl font-bold my-2">Bonus:</h5>
            <p className="text-start px-2">{technologyArray[index]?.bonus}</p>
          </div>
        )}
      </div>

      <KnownUnknownButtons
        markAsKnown={markAsKnown}
        getRandomIndex={getRandomIndex}
        index={index}
      />
    </section>
  );
};
export default Application;
