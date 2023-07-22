import Flashcard from '@/src/components/Flashcard';
import SectionHeading from '@/src/components/SectionHeading';
import WhyFlashCardsData from '@/data/WhyFlashCardsData';

const WhyFlashcards = () => {
  return (
    <section className="max-w-screen pt-20">
      <SectionHeading
        heading={'Dlaczego Fiszk'}
        headingAccent={'IT'}
        sign={'?'}
      />
      <div className="max-w-7xl mx-automin-h-96  grid  sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto p-5 mb-10">
        {WhyFlashCardsData.map((cardData) => {
          const { id } = cardData;
          return <Flashcard key={id} {...cardData} />;
        })}
      </div>
    </section>
  );
};
export default WhyFlashcards;
