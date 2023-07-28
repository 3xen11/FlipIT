import Header from '@/layout/Header';
import Navigation from '@/layout/Navigation';
import WhyFlashcards from '@/layout/WhyFlashcards';
import HowItWorks from '@/layout/HowItWorks';
import Categories from '@/layout/Categories';
import Shopping from '@/layout/Shopping';
import Contact from '@/layout/Contact';
import Footer from '@/layout/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <WhyFlashcards />
      <HowItWorks />
      <Categories />
      <Shopping />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
