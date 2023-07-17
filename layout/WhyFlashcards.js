import Flashcard from '@/src/components/Flashcard';

const WhyFlashcards = () => {
  return (
    <section className="max-w-screen pt-20">
      <h3 className="max-w-7xl text-center mx-auto">Dlaczego FiszkIT?</h3>
      <div className="max-w-7xl mx-auto h-96  grid grid-cols-4 gap-8 p-5">
        <Flashcard />
        <Flashcard />
        <Flashcard />
        <Flashcard />
      </div>
    </section>
  );
};
export default WhyFlashcards;
