const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="text-xs md:text-md flex justify-center items-center h-16 bg-black text-white">
      {' '}
      Copyright&#169; {currentYear} - Dawid Dardziński - All right reserved.
    </div>
  );
};
export default Footer;
