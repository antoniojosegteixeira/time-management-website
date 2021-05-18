import React from 'react';

const DeleteNoteItem = ({noteItem, deleteItem}) => {
  

  return (
    <div className="delete-elem-wrapper">
      <button className="delete-elem" onClick={() => deleteItem(noteItem)}>
      <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}


export default DeleteNoteItem;