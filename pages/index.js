import Header from '@/layout/Header';
import Navigation from '../layout/Navigation';
import WhyFlashcards from '@/layout/WhyFlashcards';
import HowItWorks from '@/layout/HowItWorks';
import Categories from '@/layout/Categories';
import Pricing from '@/layout/Pricing';
import Contact from '@/layout/Contact';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <WhyFlashcards />
      <HowItWorks />
      <Categories />
      <Pricing />
      <Contact />
    </>
  );
};
export default Home;
