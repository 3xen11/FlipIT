import Image from 'next/image';

const HowItWorkCard = ({ id, title, description, img, index }) => {
  return (
    <div key={id} className="grid  md:grid-cols-2 bg-[#FAFAFA] md:h-80 ">
      <div className={`p-5  ${index % 2 ? 'order-1' : ''}`}>
        <h5 className="font-bold text-xl text-teal-500">{title}</h5>
        <p className="mt-5">{description}</p>
      </div>
      <div className="relative md:block hidden">
        <Image
          src={img}
          alt={title}
          fill={true}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};
export default HowItWorkCard;
