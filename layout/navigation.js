import React, { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 564) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-white z-10 ${isSticky ? 'sticky top-0' : ''}`}>
      <div className="flex justify-between items-center max-w-7xl h-16 mx-auto px-5">
        <p className="font-bold text-2xl text-slate-700 cursor-pointer">
          FISZK<span className="text-teal-500">IT</span>{' '}
        </p>
        <ul className="flex gap-8 text-3xl font-bold text-slate-700">
          <li className="cursor-pointer text-lg transition-all hover:text-teal-500 hover:scale-105 active:scale-100">
            Kup teraz
          </li>
          <li className="cursor-pointer transition-all hover:text-teal-500 hover:scale-105 active:scale-100">
            <AiOutlineShoppingCart />
          </li>
          <li className="cursor-pointer transition-all hover:text-teal-500 hover:scale-105 active:scale-100">
            <FaUserCircle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
