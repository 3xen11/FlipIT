import Cart from '@/layout/Cart';
import Footer from '@/layout/Footer';
import Navigation from '@/layout/Navigation';

const cart = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navigation />
      <Cart />
      <Footer />
    </div>
  );
};
export default cart;
