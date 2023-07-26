import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen z-40 fixed flex items-center justify-center top-0 left-0">
      <div className="absolute w-full h-full bg-black opacity-90"></div>
      <div className="bg-white p-4 w-full h-full sm:w-4/5 sm:h-4/5 lg:w-2/5 lg:h-3/5 max-w-5xl flex justify-center items-center opacity-100 z-50 relative">
        <MdOutlineClose
          className="absolute top-20 right-12 text-3xl cursor-pointer"
          onClick={() => dispatch(closeModal())}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
