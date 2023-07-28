import { useDispatch, useSelector } from 'react-redux';
import Technologies from '../../data/CategoriesDescriptionData';
import Image from 'next/image';
import { changeTechnology } from '../features/questions/questionsSlice';

const AvailableTechnologiesModal = ({ getRandomNumber }) => {
  const dispatch = useDispatch();
  const AvailableTechs = Technologies.filter((tech) => tech.available === true);
  const { showAvailableTechModal } = useSelector((store) => store.modal);

  return (
    <div className="flex flex-col  flex-wrap gap-4 justify-around  h-1/2 items-center">
      <h3 className="p-4 text-5xl font-bold">Dostępne Technologie:</h3>
      <div className="flex justify-center gap-4">
        {AvailableTechs.map((tech) => {
          const { id, technology, img, available } = tech;

          return (
            <div
              key={id}
              className="bg-gradient-to-br from-teal-400  to-teal-600 "
              onClick={() => {
                !showAvailableTechModal ? dispatch(getRandomNumber()) : null;
                dispatch(changeTechnology(technology));
              }}
            >
              <Image
                src={img}
                width={60}
                height={60}
                alt={technology}
                title={`${technology}${!available ? ' - wkrótce' : ''}`}
                className={` hover:scale-90 active:scale-100 transition-transform p-4 h-24 w-24 cursor-pointer object-contain shadow-lg
                  ${!available ? 'grayscale bg-gray-300' : 'bg-white'}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AvailableTechnologiesModal;
