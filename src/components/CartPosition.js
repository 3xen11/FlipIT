import { MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';

const CartPosition = ({ id, cost, icons, title, removeCartItem, dispatch }) => {
  return (
    <div
      key={id}
      className="max-w-7xl items-center flex h-24 mb-4 bg-white drop-shadow-lg  transition-all"
    >
      <div className="flex w-1/3 ml-4">
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
      <div className="w-1/3 flex flex-col">
        <p className="font-bold">{title}</p>
        {/* */}
        <div className="flex">
          {icons.map((icon) => {
            return <p className="mr-2">{icon.props.alt} </p>;
          })}
        </div>
      </div>
      <div className="w-1/3 flex justify-end items-center ">
        <p className="mr-10 ">
          Do zapłaty: <span className="font-bold">{cost} zł</span>
        </p>

        <MdOutlineClose
          onClick={() => dispatch(removeCartItem(id))}
          className="mx-8 text-3xl cursor-pointer hover:text-red-500 active:scale-90 transition-all"
        />
      </div>
    </div>
  );
};
export default CartPosition;
