import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="w-full  mx-auto h-[500px] mb-5 bg-slate-100 flex flex-col justify-end items-center header-photo">
        <Link
          href="/application"
          className="mb-12 bg-teal-500 py-4 px-8  text-white font-bold text-lg shadow-lg  transition-all hover:scale-105 active:scale-100 hover:text-teal-500 hover:bg-white"
        >
          Przetestuj za darmo
        </Link>
      </div>
    </header>
  );
};
export default Header;
