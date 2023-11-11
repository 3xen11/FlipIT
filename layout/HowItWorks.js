import SectionHeading from '@/src/components/SectionHeading';
import HowItWorkCard from '@/src/components/HowItWorkCard';
import HowItWorksData from '@/data/HowItWorksData';

const HowItWorks = () => {
  return (
    <section className="max-w-screen bg-white pt-20 pb-20 overflow-hidden">
      <SectionHeading heading={'Zobacz jakie to proste'} sign={'!'} />
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex flex-col">
          {HowItWorksData.map((card, index) => {
            const { id } = card;

            return <HowItWorkCard key={id} index={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
