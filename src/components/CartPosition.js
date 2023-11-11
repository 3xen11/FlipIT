import { MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const CartPosition = ({ id, cost, icons, title, removeCartItem, dispatch }) => {
  return (
    <div
      key={id}
      className={`max-w-7xl items-center flex py-6 px-2 mt-4 md:mt-0 md:mb-4 bg-white drop-shadow-lg w-11/12 sm:w-full mx-auto transition-all flex-col h-fit  sm:h-24 sm:flex-row`}
    >
      <div className="flex justify-around w-full sm:w-1/3 -ml-4 mt-4 sm:mt-0 order-2 sm:ml-0 sm:justify-start sm:order-1">
        {icons.map((icon) => {
          return (
            <Image
              src={icon.props.src}
              alt={icon.props.alt}
              height={60}
              width={60}
              className="ml-2"
            />
          );
        })}
      </div>

      <div className="sm:w-1/3 flex flex-col w-full text-center sm:order-2">
        <p className="font-bold mt-4 sm:mt-0 text-teal-500 text-lg">{title}</p>
        {/* */}
        <div className="flex justify-around">
          {icons.map((icon) => {
            return <p className="mr-2 w-full mt-4">{icon.props.alt} </p>;
          })}
        </div>
      </div>

      <div className="w-full sm:w-1/3 flex flex-col sm:flex-row justify-center md:justify-end items-center order-3 mt-4 sm:mt-0 ">
        <p className=" ">
          Koszt: <span className="font-bold">{cost} zł</span>
        </p>

        <p
          className="text-red-500 font-bold mt-4 sm:mt-0 sm:ml-8 md:hidden text-lg"
          onClick={() => dispatch(removeCartItem(id))}
        >
          Usuń
        </p>

        <MdOutlineClose
          onClick={() => dispatch(removeCartItem(id))}
          className="mx-8 text-3xl cursor-pointer hover:text-red-500 active:scale-90 transition-all hidden md:block"
        />
      </div>
    </div>
  );
};
export default CartPosition;
