import SectionHeading from '@/src/components/SectionHeading';
import Technologies from '../data/CategoriesData';
import Image from 'next/image';

const Categories = () => {
  return (
    <section className="py-20">
      <SectionHeading
        headingAccent={'Regularnie aktualizowana baza pytań i kategorii!'}
      />
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4  p-5 ">
        {Technologies.map((tech) => {
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
    </section>
  );
};
export default Categories;
