import { MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';

const CartPosition = ({ cost, alt, src, title }) => {
  return (
    <div className="max-w-7xl items-center flex h-24 mb-4 bg-white drop-shadow-lg hover:scale-105 transition-all">
      <div className="flex w-1/3 ml-4">
        <Image src={src} alt={alt} height={60} width={60} />
      </div>
      <div className="w-1/3 flex flex-col">
        <p className="font-bold">{title}</p>
        <p>{alt}</p>
      </div>
      <div className="w-1/3 flex justify-end items-center ">
        <p className="mr-10 ">
          Do zapłaty: <span className="font-bold">{cost} zł</span>
        </p>

        {/* Render close icon here */}
        <MdOutlineClose className="mx-8 text-3xl cursor-pointer hover:text-red-500 active:scale-90 transition-all" />
      </div>
    </div>
  );
};
export default CartPosition;
