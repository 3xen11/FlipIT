import { MdOutlineClose } from 'react-icons/md';
import { JavaScriptIcon, TypeScriptIcon, ReactIcon } from '../../public/svg';

const CartPosition = () => {
  return (
    <div className="max-w-7xl items-center flex h-24 mb-4 bg-white drop-shadow-lg hover:scale-105 transition-all">
      <div className="flex w-1/3 ml-4">
        <JavaScriptIcon className="mr-4 h-12 w-12" />
        <TypeScriptIcon className="mr-4 h-12 w-12" />
        <ReactIcon className="mr-4 h-12 w-12" />
      </div>
      <div className="w-1/3 flex flex-col">
        <p className="font-bold">3 kategorie:</p>
        <p>JavaScript, TypeScript, React</p>
      </div>
      <div className="w-1/3 flex justify-end items-center ">
        <p className="mr-10 ">
          Do zapłaty: <span className="font-bold">50 zł</span>
        </p>

        <MdOutlineClose className="mx-8 text-3xl cursor-pointer hover:text-red-500 active:scale-90 transition-all" />
      </div>
    </div>
  );
};
export default CartPosition;
