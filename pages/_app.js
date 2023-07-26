import '@/styles/globals.css';
import ModalContext from '@/context/ModalsContext';

export default function App({ Component, pageProps }) {
  return (
    <ModalContext>
      <Component {...pageProps} />
    </ModalContext>
  );
}
