import { RegisterIcon } from '@/public/svg';

const Login = ({ login, changeOption, dispatch }) => {
  {
    return (
      login && (
        <div className="bg-white w-full sm:w-4/5 max-w-5xl flex">
          {/* //! FORMULARZ */}
          <div className="bg-slate-100 flex items-center justify-center w-1/2 py-20 grow ">
            <form className="w-full flex items-center justify-center">
              <div className="flex flex-col  w-4/5 md:w-3/5">
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
                <button className="mt-20 tracking-wider text-white mx-auto bg-teal-500 py-2 w-full hover:text-teal-500 hover:bg-white active:scale-95 transition-all">
                  Zaloguj
                </button>

                <p className=" mt-10 -my-10 mx-auto  sm:hidden">
                  Nie masz konta?{' '}
                  <span
                    onClick={() => dispatch(changeOption())}
                    className="text-teal-500 cursor-pointer font-bold"
                  >
                    Zarejestruj się
                  </span>
                </p>
              </div>
            </form>
          </div>
          {/* //! OBRAZEK */}
          <div className="flex-col justify-center items-center bg-white w-1/2 hidden sm:flex ">
            <RegisterIcon className="w-fit h-2/5 md:h-3/5 lg:h-4/5" />
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
