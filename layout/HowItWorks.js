import SectionHeading from '@/src/components/SectionHeading';
// import { testPhoto } from ;
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="max-w-screen bg-white pt-20">
      <SectionHeading heading={'Sprawdź jakie to proste!'} />
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden">
          <Image
            src="/../public/testPhoto.jpg"
            alt="photozzzz"
            width="1000"
            height="640"
            // layout="fill"
            // objectFit="cover"
            className="object-cover"
          />
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
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden">
          <div className="p-5">
            <h5 className="font-bold text-xl text-teal-500">LOREM IPSUM</h5>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
              eaque, voluptates qui saepe non maxime commodi reiciendis beatae
              alias modi eveniet eos, necessitatibus aspernatur. Doloremque
              molestias atque sunt ad.
            </p>
          </div>
          <Image
            src="/../public/testPhoto.jpg"
            alt="photozzzz"
            width="1000"
            height="640"
            // layout="fill"
            // objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden">
          <Image
            src="/../public/testPhoto.jpg"
            alt="photozzzz"
            width="1000"
            height="640"
            // layout="fill"
            // objectFit="cover"
            className="object-cover"
          />
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
        <div className="grid grid-cols-2 bg-[#FAFAFA] h-80 overflow-hidden">
          <div className="p-5">
            <h5 className="font-bold text-xl text-teal-500">LOREM IPSUM</h5>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
              eaque, voluptates qui saepe non maxime commodi reiciendis beatae
              alias modi eveniet eos, necessitatibus aspernatur. Doloremque
              molestias atque sunt ad.
            </p>
          </div>
          <Image
            src="/../public/testPhoto.jpg"
            alt="photozzzz"
            width="1000"
            height="640"
            // layout="fill"
            // objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
