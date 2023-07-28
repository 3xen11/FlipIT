import { useState } from 'react';
import Technologies from '../data/CategoriesDescriptionData';
import SectionHeading from '@/src/components/SectionHeading';
import Modal from '@/src/components/Modal';
import TechnologyDescriptionModal from '@/src/components/TechnologyDescriptionModal';
import TechnologySquare from '@/src/components/TechnologySquare';
import { useSelector } from 'react-redux';

const Categories = () => {
  const { showDescriptionTechModal } = useSelector((store) => store.modal);
  const [chosenTechnology, setChosenTechnology] = useState(null);

  const getTechnologyName = (techName) => {
    const selectedTechnology = Technologies.find(
      (tech) => tech.technology === techName
    );
    setChosenTechnology(selectedTechnology);
  };

  return (
    <>
      <section className="py-20 ">
        <SectionHeading
          headingAccent={'Regularnie aktualizowana baza pytań i kategorii!'}
        />

        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4  p-5 ">
          {Technologies.map((tech) => {
            return (
              <TechnologySquare
                {...tech}
                key={tech.id}
                getTechnologyName={getTechnologyName}
              />
            );
          })}
        </div>
        {showDescriptionTechModal && chosenTechnology ? (
          <Modal>
            <TechnologyDescriptionModal {...chosenTechnology} />
          </Modal>
        ) : null}
      </section>
    </>
  );
};

export default Categories;
