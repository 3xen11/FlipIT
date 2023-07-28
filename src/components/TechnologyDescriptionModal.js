const TechnologyDescriptionModal = ({
  id,
  description,
  technology,
  junior,
  mid,
  senior,
  available,
}) => {
  return (
    <div key={id} className=" w-full h-full flex flex-col justify-around">
      <div>
        <h4 className="p-4 text-5xl font-bold">{technology}</h4>
        <p className="px-4 py-2">
          {available ? (
            <span className="text-green-500">Dostępne</span>
          ) : (
            <span className="text-red-500">Dostępne wkrótce</span>
          )}
        </p>
      </div>
      <p className="p-4 -mt-8">{description}</p>
      <div className="grid grid-cols-3  text-center gap-4  -mt-6">
        <p>junior</p>
        <p>mid</p>
        <p>senior</p>
        <p>{junior}</p>
        <p>{mid}</p>
        <p>{senior}</p>
      </div>
    </div>
  );
};
export default TechnologyDescriptionModal;
