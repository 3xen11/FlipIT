import CartPosition from '@/src/components/CartPosition';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="grow ">
      <div className="max-w-7xl mx-auto mt-20 ">
        {cartItems.map((cartItem) => {
          const { cost, icons, title } = cartItem; // Extract 'cost' and 'icons' from 'cartItem'
          const { alt, src } = icons[0].props;

          return (
            <CartPosition
              cost={cost}
              alt={alt}
              src={src}
              key={cartItem.id}
              title={title}
            />
          ); // Add 'key' prop
        })}
      </div>
    </section>
  );
};
export default Cart;
