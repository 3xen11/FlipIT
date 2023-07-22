import Image from 'next/image';

const HowItWorkCard = ({ id, title, description, img, index }) => {
  return (
    <div
      key={id}
      className="grid  md:grid-cols-2 bg-[#FAFAFA] min-h-80  mr-5 mt-4"
    >
      <div className={`p-5 ${index % 2 ? 'order-1' : ''}`}>
        <h5 className="font-bold text-xl text-teal-500">{title}</h5>
        <p className="mt-5">{description}</p>
      </div>
      <div className="relative">
        <Image src={img} alt="photozzzz" fill={true} className="object-cover" />
      </div>
    </div>
  );
};
export default HowItWorkCard;
