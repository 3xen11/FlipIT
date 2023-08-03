import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const KnownUnknownButtons = ({ markAsKnown, getRandomIndex }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl w-full flex flex-col justify-between items-center mx-auto p-5 ">
      <div className="flex mt-10 flex justify-around w-full sm:w-4/5 md:w-3/5 lg:w-1/2 ">
        <button className=" flex justify-center">
          <BsXCircle
            onClick={() => {
              dispatch(getRandomIndex());
            }}
            className="h-14 w-14 hover:text-red-500 transition-all hover:scale-105 active:scale-95"
          />
        </button>
        <button className=" flex justify-center">
          <BsCheckCircle
            onClick={() => {
              dispatch(getRandomIndex());
              dispatch(markAsKnown());
            }}
            className="h-14 w-14 hover:text-teal-500 transition-all hover:scale-105 active:scale-95"
          />
        </button>
      </div>
    </div>
  );
};
export default KnownUnknownButtons;
