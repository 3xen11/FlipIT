import { useDispatch, useSelector } from 'react-redux';
import { changeIcon } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import { getId } from '../features/cart/cartSlice';

const ShoppingCardPremium = ({
  id,
  shoppingPackage,
  content,
  openAvailableTechModal,
  buttons,
  button,
}) => {
  const dispatch = useDispatch();

  const buttonIcon = useSelector((store) => store.cart.button);
  const buttonIds = useSelector((store) => store.cart.id);
  console.log(buttonIcon);

  useEffect(() => {
    const buttonId = buttonIds; // Przykład ID przycisku
    const newIcon = buttonIcon; // Użyj zaktualizowanej ikony
    dispatch(changeIcon({ buttonId, newIcon }));
  }, [buttonIcon]);

  console.log('tutej: ' + buttonIds);

  return (
    <div
      key={id}
      className=" w-80 xl:w-96 bg-[url('/svg/pricingCardBackgroundDark.svg')] bg-cover h-[450px]  p-4  flex flex-col items-center relative bg-opacity-90 text-white hover:scale-105 transition-all shadow-lg"
    >
      <div className="bg-teal-500 h-14 flex justify-center px-8 items-center left-1/2 -translate-x-1/2 xl:translate-x-0  xl:top-8 xl:-left-8 absolute font-bold ">
        <p className="tracking-widest uppercase">{shoppingPackage}</p>
      </div>
      <div className="flex  w-full mt-24 justify-around ">
        {buttons.map((buttonz) => {
          const { id, icon, newIcon } = buttonz;
          return (
            <div
              key={id}
              className="h-16 w-16 active:scale-95 transition-all cursor-pointer flex items-center justify-center bg-teal-600"
              onClick={() => {
                dispatch(openAvailableTechModal());
                dispatch(getId(id));
                console.log(button);
              }}
            >
              {!newIcon ? icon : newIcon}
            </div>
          );
        })}
      </div>
      <ul className="leading-8 mt-4 w-full tracking-wide">
        {content.map((c, i) => {
          return <li key={i}>{c}</li>;
        })}
      </ul>
      <button className="mt-4 py-4 w-3/5 bg-teal-600 active:scale-95 transition-all hover:bg-white hover:text-teal-700">
        Dodaj do koszyka
      </button>
    </div>
  );
};
export default ShoppingCardPremium;
