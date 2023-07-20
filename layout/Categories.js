import SectionHeading from '@/src/components/SectionHeading';
import { useState } from 'react';
import Technologies from '../data/CategoriesData';
import Image from 'next/image';

const Categories = () => {
  const [technologies, setTechnologies] = useState(Technologies);

  if (!technologies) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section className="max-w-screen pt-20 mb-20 relative">
      <SectionHeading
        headingAccent={'Regularnie aktualizowana baza pytań i kategorii!'}
      />
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-12 gap-4 text-center">
        {technologies.map((tech) => {
          const { id, technology, img, available } = tech;

          return (
            <Image
              src={img}
              key={id}
              width={60}
              height={60}
              alt={technology}
              title={`${technology}${!available ? ' - wkrótce' : ''}`}
              className={`p-4 h-full w-full cursor-pointer object-contain  border-2 shadow-lg
                  ${!available ? 'grayscale bg-gray-300' : 'bg-white'}
                `}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Categories;
