import CartPosition from '@/src/components/CartPosition';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCost, removeCartItem } from '@/src/features/cart/cartSlice';
import { EmptyCart } from '@/public/svg';
import { setIsMobile } from '@/src/features/mobile/mobileSlice';

const Cart = () => {
  const { isMobile } = useSelector((store) => store.mobile);
  const { cartItems, totalCost } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalCost());
  }, [cartItems]);

  return (
    <section className="grow w-[98%] mx-auto">
      <div className="max-w-7xl mx-auto mt-10 ">
        <div className=" mb-16 flex justify-end lg:flex-row  flex flex-col">
          <div className="flex flex-col  grow mr-2  order-2 lg:order-1 w-full">
            {cartItems.length === 0 ? (
              <div className="mt-10 md:mt-0 flex flex-col">
                <EmptyCart className="w-48 h-48 self-center" />
                <p className="text-center font-bold text-xl">
                  TWÓJ KOSZYK JEST PUSTY
                </p>
              </div>
            ) : (
              cartItems.map((cartItem) => {
                const { id, cost, icons, title } = cartItem;
                return (
                  <CartPosition
                    id={id}
                    cost={cost}
                    icons={icons}
                    title={title}
                    removeCartItem={removeCartItem}
                    dispatch={dispatch}
                    setIsMobile={setIsMobile}
                    isMobile={isMobile}
                  />
                );
              })
            )}
          </div>
          <div className="bg-white w-11/12 sm:w-3/5 lg:w-fit flex flex-col mb-10 lg:mb-0 h-52 p-8 bg-white lg:order-2 drop-shadow-lg mx-auto">
            <p className="text-xl">Do zapłaty: </p>
            <p className="font-bold">
              {totalCost.length === 0 ? '0' : totalCost} zł
            </p>
            <button className="hover:scale-105 transition-all active:scale-100 bg-teal-500 px-8 py-4 w-44  self-center mt-8 text-white">
              KUP TERAZ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
