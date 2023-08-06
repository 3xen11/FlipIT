import { useDispatch } from 'react-redux';
import Technologies from '../../data/CategoriesDescriptionData';
import Image from 'next/image';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';

const AvailableTechnologiesModal = ({ getTechnologyArray }) => {
  const AvailableTechs = Technologies.filter((tech) => tech.available === true);
  const dispatch = useDispatch();

  useEffect(() => {
    const defaultTechnology = 'JavaScript';
    window.location.pathname === '/application' &&
      dispatch(getTechnologyArray(defaultTechnology));
  }, []);

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
                className={` hover:scale-90 active:scale-100 transition-transform p-4 h-24 w-24 cursor-pointer object-contain shadow-lg
                  ${!available ? 'grayscale bg-gray-300' : 'bg-white'}
                `}
                onClick={() =>
                  window.location.pathname === '/application' &&
                  dispatch(getTechnologyArray(technology))
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AvailableTechnologiesModal;
