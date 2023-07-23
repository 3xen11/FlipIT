import Modal from './Modal';

const CategoryModal = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-around">
      <h4 className="p-4 text-5xl">JavaScript</h4>
      <p className="p-4 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        repudiandae odio ut. Corporis adipisci hic magnam provident iusto,
        perspiciatis temporibus saepe quas reprehenderit repellendus, totam
        atque iure deserunt. Quaerat, veniam. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Officia repudiandae odio ut. Corporis
        adipisci hic magnam provident iusto, perspiciatis temporibus saepe quas
        reprehenderit repellendus, totam atque iure deserunt. Quaerat, veniam.
      </p>
      <div className="grid grid-cols-3  text-center gap-6">
        <p>junior</p>
        <p>mid</p>
        <p>senior</p>
        <p>100</p>
        <p>50</p>
        <p>40</p>
      </div>
    </div>
  );
};
export default CategoryModal;
