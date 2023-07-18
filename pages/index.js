import Header from '@/layout/Header';
import Navigation from '../layout/Navigation';
import WhyFlashcards from '@/layout/WhyFlashcards';
import HowItWorks from '@/layout/HowItWorks';
import Categories from '@/layout/Categories';
import Pricing from '@/layout/Pricing';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <WhyFlashcards />
      <HowItWorks />
      <Categories />
      <Pricing />
    </>
  );
};
export default Home;
