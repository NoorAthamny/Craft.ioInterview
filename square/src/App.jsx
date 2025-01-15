/* eslint-disable no-unused-vars */
import { useState } from "react";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import Square from "./components/Square";

import EditDeleteModal from './components/EditDeleteModal';

function App() {
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [square, setSquare] = useState([]);
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);
  const[ editDeleteModal , setEditDeleteModal] = useState(false)
  const [selectedSquare , setSelectedSquare] = useState(null)


  const openModel = (selectMode ,id) => {
    setMode(selectMode);
    const squareData = square.find((sq) => sq.id === id);
    setSelectedSquare(squareData || null);
    setAddIsOpen(true);
  };

  const closeModal = () => setAddIsOpen(false);

  const openEditDeleteModal = (id)  => {
    setSelectedSquare(id)
    setEditDeleteModal(true)
  } 
  const closeEditDeleteModal = () => setEditDeleteModal(false)



  // add sqaure to the array
  const handleAddSquare = (newSquare) => {
    saveCurrStateToHistory();
    setSquare((prev) => [...prev, newSquare]);
    setRedoHistory([]);
  };
  // remove sqaure from the array
  const handleRemoveSquare = (id) => {
    saveCurrStateToHistory();
    setSquare(square.filter((sq) => sq.id !== id));
    setRedoHistory([]);
  };

  // move fn
  const handleMoveSquare = (id, x, y) => {
    saveCurrStateToHistory();
    setSquare(
      square.map((sq) =>
        sq.id === id ? { ...sq, x: parseInt(x, 10), y: parseInt(y, 10) } : sq
      )
    );
    setRedoHistory([]);
  };

  // undo / redo

  const saveCurrStateToHistory = () => {
    setHistory((prev) => [...prev, square]);
  };

  const handleUndoState = () => {
    if (history.length === 0) return;
    const lastState = history[history.length - 1];
    setRedoHistory((prev) => [square, ...prev]);
    setSquare(lastState);
    setHistory((prev) => prev.slice(0, -1));
  };

  const handleRedoState = () => {
    if (redoHistory.length === 0) return;
    const nextState = redoHistory[0];
    setHistory((prev) => [...prev, square]);
    setSquare(nextState);
    setRedoHistory((prev) => prev.slice(1));
  };

  return (
    <>
      <NavBar
        handleRedoState={handleRedoState}
        handleUndoState={handleUndoState}
        openAdd={() => openModel("add")}
      />
      <Square openEditDeleteModal={openEditDeleteModal} sqaure={square} />
      {addIsOpen && (
        <Model
          square={square}
          moveSquare={handleMoveSquare}
          removeSquare={handleRemoveSquare}
          addSqaure={handleAddSquare}
          mode={mode}
          closeModal={closeModal}
          selectedSquare={selectedSquare}
        />
      )}
      {
        editDeleteModal && (
          <EditDeleteModal
          handleRemoveSquare={handleRemoveSquare}
          selectedSquare={selectedSquare}
          closeEditDeleteModal={closeEditDeleteModal}
          openMove={(id) => openModel("move" , id)}
          openRemove={(id) => openModel("remove" , id)}
        />
        )
      }
     
    </>
  );
}

export default App;
