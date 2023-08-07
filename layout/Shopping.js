// Data
import ShoppingCardData from '@/data/ShoppingCardData';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Components
import Modal from '@/src/components/Modal';
import SectionHeading from '@/src/components/SectionHeading';
import ShoppingCardBasic from '@/src/components/ShoppingCardBasic';
import ShoppingCardStandard from '@/src/components/ShoppingCardStandard';
import ShoppingCardPremium from '@/src/components/ShoppingCardPremium';
import AvailableTechnologiesModal from '@/src/components/AvailableTechnologiesModal';

// Slices
import { openAvailableTechModal } from '@/src/features/modal/modalSlice';
import { getRandomNumber } from '@/src/features/questions/questionSlice';
import { getId, changeIcon, addToCart } from '@/src/features/cart/cartSlice';

const Shopping = () => {
  const dispatch = useDispatch();
  const { showAvailableTechModal } = useSelector((store) => store.modal);
  const { buttons, button, id, cartItems } = useSelector((store) => store.cart);

  // console.log();

  useEffect(() => {
    const buttonId = id;
    const newIcon = button;
    dispatch(changeIcon({ buttonId, newIcon }));
  }, [button]);

  console.log(cartItems);

  return (
    <section className="max-w-screen pt-20 bg-white pb-20">
      <SectionHeading heading={'Nie czekaj, zacznij naukę już teraz!'} />
      <div className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row  justify-around items-center lg:items-end">
        <ShoppingCardStandard
          key={ShoppingCardData[1].id}
          {...ShoppingCardData[1]}
          openAvailableTechModal={openAvailableTechModal}
          buttons={buttons.standard}
          getId={getId}
          dispatch={dispatch}
          addToCart={addToCart}
        />
        <ShoppingCardPremium
          key={ShoppingCardData[2].id}
          {...ShoppingCardData[2]}
          openAvailableTechModal={openAvailableTechModal}
          buttons={buttons.premium}
          getId={getId}
          dispatch={dispatch}
          addToCart={addToCart}
        />
        <ShoppingCardBasic
          key={ShoppingCardData[0].id}
          {...ShoppingCardData[0]}
          openAvailableTechModal={openAvailableTechModal}
          buttons={buttons.basic}
          getId={getId}
          dispatch={dispatch}
          addToCart={addToCart}
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
          <AvailableTechnologiesModal getRandomNumber={getRandomNumber} />
        </Modal>
      ) : null}
    </section>
  );
};
export default Shopping;
