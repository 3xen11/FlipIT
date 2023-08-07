import CartPosition from '@/src/components/CartPosition';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCost } from '@/src/features/cart/cartSlice';

const Cart = () => {
  const { cartItems, totalCost } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalCost());
  }, [cartItems]);

  return (
    <section className="grow ">
      <div className="max-w-7xl mx-auto mt-20 ">
        <div className=" mb-16 flex justify-end">
          <div className="bg-white flex flex-col w-fit p-8 bg-white drop-shadow-lg">
            <p>Do zapłaty: </p>
            <p>{totalCost.length === 0 ? '0' : totalCost}zł</p>
            <button className="flex bg-teal-500 px-8 py-4 self-center mt-8 text-white">
              KUP TERAZ
            </button>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          const { cost, icons, title } = cartItem;

          return (
            <CartPosition
              cost={cost}
              icons={icons}
              key={cartItem.id}
              title={title}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Cart;
