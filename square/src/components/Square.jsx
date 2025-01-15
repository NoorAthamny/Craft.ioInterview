/* eslint-disable react/prop-types */
const Square = ({ sqaure = [] , openEditDeleteModal }) => {

  return (
    <div className="relative min-h-screen w-full">
      {sqaure.map((sq) => (
        <div
          key={sq.id}
          
          className=" cursor-pointer absolute flex items-center justify-center "
          style={{
            top: `${sq.y}px`,
            left: `${sq.x}px`,
            width: `${sq.size}px`,
            height: `${sq.size}px`,
            backgroundColor: sq.color || "black",
          }}
          onClick={() => openEditDeleteModal(sq.id)}
        >
          <span className="text-white">{sq.id}</span>
        </div>
      ))}
    </div>
  );
};

export default Square;
