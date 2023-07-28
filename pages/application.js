import Navigation from '@/layout/Navigation';
import AvailableTechnologiesModal from '@/src/components/AvailableTechnologiesModal';
import App from '@/layout/Application';
import Footer from '@/layout/Footer';
import { getRandomNumber } from '@/src/features/questions/questionsSlice';

const app = () => {
  return (
    <>
      <Navigation />;
      <div className="scale-75">
        <AvailableTechnologiesModal getRandomNumber={getRandomNumber} />
      </div>
      <App />
      <Footer />
    </>
  );
};
export default app;
