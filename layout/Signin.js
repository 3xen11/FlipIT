import Login from '@/src/components/Login';
import Register from '@/src/components/Register';
import { changeOption } from '@/src/features/signin/signinSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signin = () => {
  const { login } = useSelector((store) => store.signin);

  const dispatch = useDispatch();

  return (
    <section className="flex items-center justify-center grow bg-slate-100 sm:bg-inherit drop-shadow-lg">
      <Login changeOption={changeOption} login={login} dispatch={dispatch} />
      <Register changeOption={changeOption} login={login} dispatch={dispatch} />
    </section>
  );
};
export default Signin;
