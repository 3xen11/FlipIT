import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { openDescriptionTechModal } from '@/src/features/modal/modalSlice';

const TechnologySquare = ({
  id,
  img,
  technology,
  available,
  getTechnologyName,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      key={id}
      className="bg-gradient-to-br from-teal-400  to-teal-600 "
      onClick={() => {
        dispatch(openDescriptionTechModal());
        getTechnologyName(technology);
      }}
    >
      <Image
        src={img}
        width={60}
        height={60}
        alt={technology}
        title={`${technology}${!available ? ' - wkrótce' : ''}`}
        className={` hover:scale-90 active:scale-100 transition-transform p-4 h-24 w-24 cursor-pointer object-contain   shadow-lg
                  ${!available ? 'grayscale bg-gray-300' : 'bg-white'}
                `}
      />
    </div>
  );
};
export default TechnologySquare;
