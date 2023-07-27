import Navigation from '@/layout/Navigation';
import AvailableTechnologiesModal from '@/src/components/AvailableTechnologiesModal';
import App from '@/layout/Application';
import Footer from '@/layout/Footer';

const app = () => {
  return (
    <>
      <Navigation />;
      <AvailableTechnologiesModal />
      <App />
      <Footer />
    </>
  );
};
export default app;
