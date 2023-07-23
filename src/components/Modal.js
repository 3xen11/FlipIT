const Modal = ({ children }) => {
  return (
    <div className="w-screen h-screen z-40 fixed flex items-center justify-center">
      <div className="absolute w-full h-full bg-black opacity-90"></div>
      <div className="bg-white p-4 w-full h-full sm:w-4/5 sm:h-4/5 lg:w-3/5 lg:h-3/5 max-w-5xl flex justify-center items-center opacity-100 z-50">
        {children}
      </div>
    </div>
  );
};

export default Modal;
