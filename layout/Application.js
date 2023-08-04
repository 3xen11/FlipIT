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

  console.log(technologyArray);
  return (
    <section className="max-w-screen mt-10 py-20 text-center">
      <div className="scale-75">
        <AvailableTechnologiesModal getTechnologyArray={getTechnologyArray} />
      </div>
      <p className="mb-4 font-bold">Pozostałe pytania: {maxIndex}</p>
      <AppFlashCard
        index={index}
        technologyArray={technologyArray}
        maxIndex={maxIndex}
      />
      <KnownUnknownButtons
        markAsKnown={markAsKnown}
        getRandomIndex={getRandomIndex}
        index={index}
      />
    </section>
  );
};
export default Application;
