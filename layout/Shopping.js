import SectionHeading from '@/src/components/SectionHeading';
import ShoppingCardNormal from '@/src/components/ShoppingCardNormal';
import ShoppingCardPremium from '@/src/components/ShoppingCardPremium';
import ShoppingCardData from '@/data/ShoppingCardData';
import Modal from '@/src/components/Modal';
import AvailableTechnologiesModal from '@/src/components/AvailableTechnologiesModal';
import { useSelector } from 'react-redux';
import { openAvailableTechModal } from '@/src/features/modal/modalSlice';

const Shopping = () => {
  const { showAvailableTechModal } = useSelector((store) => store.modal);
  console.log();

  return (
    <section className="max-w-screen pt-20 bg-white pb-20">
      <SectionHeading heading={'Nie czekaj, zacznij naukę już teraz!'} />
      <div className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row  justify-around items-center lg:items-end">
        <ShoppingCardNormal
          key={ShoppingCardData[1].id}
          {...ShoppingCardData[1]}
          openAvailableTechModal={openAvailableTechModal}
        />
        <ShoppingCardPremium
          key={ShoppingCardData[2].id}
          {...ShoppingCardData[2]}
          openAvailableTechModal={openAvailableTechModal}
        />
        <ShoppingCardNormal
          key={ShoppingCardData[0].id}
          {...ShoppingCardData[0]}
          openAvailableTechModal={openAvailableTechModal}
        />
      </div>
      <p className="max-w-7xl mx-auto mt-20 text-center px-12 xl:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam
        assumenda dicta ipsa rem ut iure! Sint nulla, iusto necessitatibus error
        odit architecto maxime suscipit perspiciatis eaque, est voluptate.
        Autem.
      </p>
      {showAvailableTechModal ? (
        <Modal>
          <AvailableTechnologiesModal />
        </Modal>
      ) : null}
    </section>
  );
};
export default Shopping;
