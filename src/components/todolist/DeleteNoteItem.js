import React from 'react';

const DeleteNoteItem = ({noteItem, deleteItem}) => {
  

  return (
    <div>
      <button className="deleteElem" onClick={() => deleteItem(noteItem)}>
      <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}


export default DeleteNoteItem;