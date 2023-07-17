import Header from '@/layout/Header';
import Navigation from '../layout/Navigation';
import WhyFlashcards from '@/layout/WhyFlashcards';
import HowItWorks from '@/layout/HowItWorks';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <WhyFlashcards />
      <HowItWorks />
    </>
  );
};
export default Home;
