import Footer from '@/layout/Footer';
import Navigation from '@/layout/Navigation';
import Signin from '@/layout/Signin';

const signin = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navigation />
      <Signin />
      <Footer />
    </div>
  );
};
export default signin;
