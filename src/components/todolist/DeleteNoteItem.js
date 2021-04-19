import React from 'react';

const DeleteNoteItem = ({noteItem, deleteItem}) => {
  

  return (
    <div>
      <button className="deleteElem" onClick={() => deleteItem(noteItem)}>
        <i className="trash alternate icon"></i>
      </button>
    </div>
  );
}


export default DeleteNoteItem;