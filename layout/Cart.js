import CartPosition from '@/src/components/CartPosition';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCost, removeCartItem } from '@/src/features/cart/cartSlice';

const Cart = () => {
  const { cartItems, totalCost } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalCost());
  }, [cartItems]);

  return (
    <section className="grow ">
      <div className="max-w-7xl mx-auto mt-20 ">
        <div className=" mb-16 flex justify-end ">
          <div className="flex-flex-col grow mr-2">
            {cartItems.length === 0
              ? 'TWÓJ KOSZYK JEST PUSTY'
              : cartItems.map((cartItem) => {
                  const { id, cost, icons, title } = cartItem;
                  return (
                    <CartPosition
                      id={id}
                      cost={cost}
                      icons={icons}
                      title={title}
                      removeCartItem={removeCartItem}
                      dispatch={dispatch}
                    />
                  );
                })}
          </div>
          <div className="bg-white flex flex-col w-fit h-52 p-8 bg-white drop-shadow-lg">
            <p>Do zapłaty: </p>
            <p>{totalCost.length === 0 ? '0' : totalCost}zł</p>
            <button className="flex bg-teal-500 px-8 py-4 self-center mt-8 text-white">
              KUP TERAZ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
