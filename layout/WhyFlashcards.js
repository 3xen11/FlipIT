import Flashcard from '@/src/components/Flashcard';
import SectionHeading from '@/src/components/SectionHeading';

const WhyFlashcards = () => {
  return (
    <section className="max-w-screen pt-20">
      <SectionHeading heading={'Dlaczego Fiszk'} headingAccent={'IT'} />
      <div className="max-w-7xl mx-auto h-96  grid grid-cols-4 gap-8 p-5 mb-10">
        <Flashcard text="Prostota" description="bo tak" />
        <Flashcard text="Ucz się kiedy i gdzie chcesz" description="bo tak" />
        <Flashcard text="Starannie dobrane pytania" description="bo tak" />
        <Flashcard
          text="Możliwość zdobycia darmowych kategorii"
          description="bo tak"
        />
      </div>
    </section>
  );
};
export default WhyFlashcards;
