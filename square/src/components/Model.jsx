/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Model = ({
  closeModal,
  mode,
  addSqaure,
  removeSquare,
  moveSquare,
  square,
  selectedSquare,
}) => {
  const [id, setId] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("#000000");
  const [error, setError] = useState("");

  useEffect(() => {
    if (mode === "add") {
      setId(String(Math.floor(Math.random() * 1000) + 1));
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "move" && selectedSquare) {
      setId(selectedSquare.id);
      setX(selectedSquare.x);
      setY(selectedSquare.y);
    }
  }, [mode, selectedSquare]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "add") {
      const idExists = square.some((sq) => sq.id === id);
      if (idExists || id === "") {
        setError("The ID already exists.");
        return;
      }

      addSqaure({
        id,
        x: parseInt(x, 10),
        y: parseInt(y, 10),
        size: parseInt(size, 10),
        color,
      });
    } else if (mode === "remove") {
      removeSquare(id);
    } else if (mode === "move") {
      moveSquare(id, x, y);
    }

    closeModal();
    // console.log(id, x, y, size, color);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-400 h-auto w-auto absolute top-52 left-52 shadow-md p-5 flex flex-col gap-5">
      {error && <div className="text-red-500">{error}</div>}
      {mode === "add" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="id">Id: </label>
            <input
              onChange={(e) => setId(e.target.value)}
              value={id}
              type="text"
              placeholder="id"
              readOnly
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="xPosition">x: </label>
            <input
              onChange={(e) => setX(e.target.value)}
              value={x}
              type="text"
              placeholder="x-position"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="yPosition">y: </label>
            <input
              onChange={(e) => setY(e.target.value)}
              value={y}
              type="text"
              placeholder="y-position"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="size">length: </label>
            <input
              onChange={(e) => setSize(e.target.value)}
              value={size}
              type="text"
              placeholder="size"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="color">Color </label>
            <input
              onChange={(e) => setColor(e.target.value)}
              value={color}
              type="text"
              placeholder="color"
            />
          </div>

          <button className="bg-white" type="submit">
            Ok
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
            className="bg-white">
            Close
          </button>
        </>
      )}

      {mode === "move" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="xPosition">x: </label>
            <input
              onChange={(e) => setX(e.target.value)}
              value={x}
              type="text"
              placeholder="x-position"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="yPosition">y: </label>
            <input
              onChange={(e) => setY(e.target.value)}
              value={y}
              type="text"
              placeholder="y-position"
            />
          </div>

          <button className="bg-white" type="submit">
            Ok
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
            className="bg-white">
            Close
          </button>
        </>
      )}

      {mode === "remove" && (
        <>
          <button className="bg-white" type="submit">
            Ok
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
            className="bg-white">
            Close
          </button>
        </>
      )}
    </form>
  );
};

export default Model;
