import CartPosition from '@/src/components/CartPosition';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="grow ">
      <div className="max-w-7xl mx-auto mt-20 ">
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
