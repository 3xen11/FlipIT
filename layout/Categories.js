import SectionHeading from '@/src/components/SectionHeading';
import Technologies from '../data/CategoriesDescriptionData';
import Modal from '@/src/components/Modal';
import { useState } from 'react';
import TechnologyDescriptionModal from '@/src/components/TechnologyDescriptionModal';
import TechnologySquare from '@/src/components/TechnologySquare';

const Categories = () => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [chosenTechnology, setChosenTechnology] = useState(null);

  const closeModal = () => {
    setShowDescriptionModal(false);
  };

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
                setShowDescriptionModal={setShowDescriptionModal}
                showDescriptionModal={showDescriptionModal}
                getTechnologyName={getTechnologyName}
              />
            );
          })}
        </div>
        {showDescriptionModal && chosenTechnology ? (
          <Modal closeModal={closeModal}>
            <TechnologyDescriptionModal {...chosenTechnology} />
          </Modal>
        ) : null}
      </section>
    </>
  );
};

export default Categories;
