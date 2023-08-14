import Login from '@/src/components/Login';
import Register from '@/src/components/Register';
import { changeOption } from '@/src/features/signin/signinSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMobile } from '@/src/features/mobile/mobileSlice';

const Signin = () => {
  const { login } = useSelector((store) => store.signin);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 767));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="flex items-center justify-center grow bg-slate-100 sm:bg-inherit drop-shadow-lg">
      <Login changeOption={changeOption} login={login} dispatch={dispatch} />
      <Register changeOption={changeOption} login={login} dispatch={dispatch} />
    </section>
  );
};
export default Signin;
