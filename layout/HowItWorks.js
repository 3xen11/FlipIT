import SectionHeading from '@/src/components/SectionHeading';

import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="max-w-screen bg-white pt-20 pb-20">
      <SectionHeading heading={'Zobacz jakie to proste'} sign={'!'} />
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden ml-5">
          <div className="relative">
            <Image
              src="/../public/testPhoto.jpg"
              alt="photozzzz"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h5 className="font-bold text-xl text-teal-500">LOREM IPSUM</h5>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
              eaque, voluptates qui saepe non maxime commodi reiciendis beatae
              alias modi eveniet eos, necessitatibus aspernatur. Doloremque
              molestias atque sunt ad.
            </p>
          </div>
        </div>
        {/* TUTAJ BAWIE SIE ZE ZDJECIAMI */}
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80  mr-5">
          <div className="p-5">
            <h5 className="font-bold text-xl text-teal-500">LOREM IPSUM</h5>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
              eaque, voluptates qui saepe non maxime commodi reiciendis beatae
              alias modi eveniet eos, necessitatibus aspernatur. Doloremque
              molestias atque sunt ad.
            </p>
          </div>
          {/* ZDJECIE DO ZABAWY */}
          <div className="relative">
            <Image
              src="/../public/testPhoto.jpg"
              alt="photozzzz"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden ml-5">
          <div className="relative">
            <Image
              src="/../public/testPhoto.jpg"
              alt="photozzzz"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h5 className="font-bold text-xl text-teal-500">LOREM IPSUM</h5>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
              eaque, voluptates qui saepe non maxime commodi reiciendis beatae
              alias modi eveniet eos, necessitatibus aspernatur. Doloremque
              molestias atque sunt ad.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden mr-5">
          <div className="p-5">
            <h5 className="font-bold text-xl text-teal-500">LOREM IPSUM</h5>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
              eaque, voluptates qui saepe non maxime commodi reiciendis beatae
              alias modi eveniet eos, necessitatibus aspernatur. Doloremque
              molestias atque sunt ad.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/../public/testPhoto.jpg"
              alt="photozzzz"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
