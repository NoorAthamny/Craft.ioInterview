/* eslint-disable react/prop-types */

const EditDeleteModal = ({  openMove,
    closeEditDeleteModal,
    selectedSquare,
    handleRemoveSquare, }) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-col absolute  h-48 w-48 p-6 bg-slate-300" style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>

        <span onClick={() => closeEditDeleteModal()} className="cursor-pointer rounded bg-red-500 px-2 ">X</span>
       
        <button
          onClick={() => {
            openMove(selectedSquare)
            closeEditDeleteModal();
          } }
          className="bg-slate-500 px-4 py-2 cursor-pointer">
          Move
        </button>
        <button
          onClick={() => {
            handleRemoveSquare(selectedSquare)
            closeEditDeleteModal();
          }}
          className="bg-slate-500 px-4 py-2 cursor-pointer">
          Delete
        </button>

   
    </div>
  )
}

export default EditDeleteModal
