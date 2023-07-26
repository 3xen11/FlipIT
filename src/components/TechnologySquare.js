import Image from 'next/image';

const TechnologySquare = ({
  id,
  img,
  technology,
  available,
  showDescriptionModal,
  setShowDescriptionModal,
  getTechnologyName,
}) => {
  return (
    <div
      key={id}
      className="bg-gradient-to-br from-teal-400  to-teal-600 "
      onClick={() => {
        setShowDescriptionModal(!showDescriptionModal);
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
