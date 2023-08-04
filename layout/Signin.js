import Login from '@/src/components/Login';
import Register from '@/src/components/Register';
import { changeOption } from '@/src/features/signin/signinSlice';
import { useSelector } from 'react-redux';

const Signin = () => {
  const { login } = useSelector((store) => store.signin);

  return (
    <section className="flex items-center justify-center grow ">
      <Login changeOption={changeOption} login={login} />
      <Register changeOption={changeOption} login={login} />
    </section>
  );
};
export default Signin;
