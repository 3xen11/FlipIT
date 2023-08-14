import { LoginIcon } from '@/public/svg';

const Register = ({ login, changeOption, isMobile, dispatch }) => {
  return (
    !login && (
      <div className="bg-white w-full sm:w-4/5 max-w-5xl grid sm:grid-cols-2">
        {/* //! OBRAZEK */}
        <div className="sm:flex flex-col justify-center items-center bg-white hidden ">
          <LoginIcon className="w-fit h-2/5 md:h-3/5 lg:h-4/5" />
          <p>
            Masz już konto?{' '}
            <span
              onClick={() => dispatch(changeOption())}
              className="text-teal-500 cursor-pointer font-bold"
            >
              Zaloguj się
            </span>
          </p>
        </div>

        {/* //! FORMULARZ */}
        <div className="bg-slate-100 flex items-center justify-center py-14">
          <form className="w-full flex items-center justify-center">
            <div className="flex flex-col  w-4/5 md:w-3/5">
              <label className=" mb-1" htmlFor="login">
                E-mail:
              </label>
              <input
                className="p-2 w-full py-2"
                type="text"
                id="login"
                placeholder="Podaj swój Email"
              />
              <label className=" mb-1 mt-6" htmlFor="password">
                Hasło:
              </label>
              <input
                className="p-2 w-full py-2"
                type="password"
                id="password"
                placeholder="Podaj swoje hasło"
              />
              <label className=" mb-1 mt-6" htmlFor="password">
                Powtórz hasło:
              </label>
              <input
                className="p-2 w-full py-2"
                type="password"
                id="password"
                placeholder="Powtórz swoje hasło"
              />
              <button className="mt-20 tracking-wider text-white mx-auto bg-teal-500 py-2 w-full  hover:text-teal-500 hover:bg-white active:scale-95 transition-all">
                Zarejestruj
              </button>
              {isMobile ? (
                <p className=" mt-10 -my-10 mx-auto  sm:hidden">
                  Masz już konto?{' '}
                  <span
                    onClick={() => dispatch(changeOption())}
                    className="text-teal-500 cursor-pointer font-bold"
                  >
                    Zaloguj się
                  </span>
                </p>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    )
  );
};
export default Register;
