const SectionHeading = ({ heading, headingAccent, sign }) => {
  return (
    <h3 className="max-w-7xl text-center mx-auto text-3xl mb-10 px-4 font-bold">
      {heading}
      {headingAccent ? (
        <span className="text-teal-500">{headingAccent}</span>
      ) : (
        ''
      )}
      {sign ? sign : ''}
    </h3>
  );
};
export default SectionHeading;
