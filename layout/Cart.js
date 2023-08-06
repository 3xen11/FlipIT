import CartPosition from '@/src/components/CartPosition';

const Cart = () => {
  return (
    <section className="grow ">
      <div className="max-w-7xl mx-auto mt-20 ">
        <CartPosition />
        <CartPosition />
      </div>
    </section>
  );
};
export default Cart;
