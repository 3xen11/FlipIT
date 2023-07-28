import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const ModalContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <GlobalContext.Provider value={{ showModal, setShowModal, closeModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ModalContext;
