import { useSelector } from 'react-redux';

import AppFlashCard from '@/src/components/AppFlashCard';
import AvailableTechnologiesModal from '@/src/components/AvailableTechnologiesModal';
import KnownUnknownButtons from '@/src/components/KnownUnknownButtons';

import {
  markAsKnown,
  getRandomIndex,
  getTechnologyArray,
} from '@/src/features/questions/questionSlice';

const Application = () => {
  const { index, technologyArray, maxIndex } = useSelector(
    (store) => store.question
  );

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
