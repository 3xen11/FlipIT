import Technologies from '../../data/CategoriesData';
import Image from 'next/image';

const AvailableTechnologiesModal = () => {
  const AvailableTechs = Technologies.filter((tech) => tech.available === true);
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
        })}
      </div>
    </div>
  );
};
export default AvailableTechnologiesModal;
