import Header from '@/layout/Header';
import Navigation from '@/layout/Navigation';
import WhyFlashcards from '@/layout/WhyFlashcards';
import HowItWorks from '@/layout/HowItWorks';
import Categories from '@/layout/Categories';
import Shopping from '@/layout/Shopping';
import Contact from '@/layout/Contact';
import Footer from '@/layout/Footer';
import { useRef } from 'react';

const Home = () => {
  const shoppingCardRef = useRef(null);

  return (
    <>
      <Navigation shoppingCardRef={shoppingCardRef} />
      <Header />
      <WhyFlashcards />
      <HowItWorks />
      <Categories />
      <Shopping shoppingCardRef={shoppingCardRef} />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
