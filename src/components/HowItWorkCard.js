import React from 'react';
import Image from 'next/image';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const HowItWorkCard = ({ id, title, description, img, index }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [actionExecuted, setActionExecuted] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView && !actionExecuted) {
      setScrolled(true);
      setActionExecuted(true);
    }
  }, [inView, actionExecuted]);

  return (
    <div
      key={id}
      ref={ref}
      className={`grid ${
        scrolled
          ? index % 2
            ? 'animate__animated animate__fadeInRight'
            : 'animate__animated animate__fadeInLeft'
          : ''
      }  md:grid-cols-2 md:h-80`}
    >
      <div className={`p-5 ${index % 2 ? 'order-1' : ''}`}>
        <h5 className="font-bold text-xl text-teal-500">{title}</h5>
        <p className="mt-5">{description}</p>
      </div>
      <div className="relative w-full h-full bg-blue-500 md:block hidden">
        <Image src={img} alt={title} fill={true} className="object-cover" />
      </div>
    </div>
  );
};

export default HowItWorkCard;
