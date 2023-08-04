import { RegisterIcon } from '@/public/svg';
import { useDispatch } from 'react-redux';

const Login = ({ login, changeOption }) => {
  const dispatch = useDispatch();

  {
    return (
      login && (
        <div className="bg-white w-full sm:w-4/5 max-w-5xl h-96 grid  sm:grid-cols-2">
          <div className="bg-slate-200 flex items-center justify-center">
            <form className="w-full flex items-center justify-center">
              <div className="flex flex-col  w-3/5 ">
                <label className="mb-1" htmlFor="login">
                  E-mail:
                </label>
                <input
                  className="p-2 w-full py-2"
                  type="text"
                  id="login"
                  placeholder="Podaj swój Email"
                />
                <label className="mb-1 mt-8" htmlFor="password">
                  Hasło:
                </label>
                <input
                  className="p-2 w-full py-2"
                  type="password"
                  id="password"
                  placeholder="Podaj swoje hasło"
                />
                <button className="mt-14 tracking-wider text-white mx-auto bg-teal-500 py-2 w-full hover:text-teal-500 hover:bg-white active:scale-95 transition-all">
                  Zaloguj
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center bg-white">
            <RegisterIcon className="w-fit h-4/5" />
            <p>
              Nie masz konta?{' '}
              <span
                onClick={() => dispatch(changeOption())}
                className="text-teal-500 cursor-pointer font-bold"
              >
                Zarejestruj się
              </span>
            </p>
          </div>
        </div>
      )
    );
  }
};
export default Login;
