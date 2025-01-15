/* eslint-disable react/prop-types */

const NavBar = ({ openAdd ,handleUndoState , handleRedoState }) => {
  return (
    <nav className="w-full h-20 bg-slate-300">
      <ul className="flex justify-center items-center gap-4  h-full">
        <li
          onClick={() => openAdd()}
          className="bg-slate-500 px-4 py-2 cursor-pointer">
          Add
        </li>
      
        <li onClick={handleUndoState}   className="bg-slate-500 px-4 py-2 cursor-pointer">Undo</li>
        <li onClick={handleRedoState} className="bg-slate-500 px-4 py-2 cursor-pointer">Redo</li>
      </ul>
    </nav>
  );
};

export default NavBar;
