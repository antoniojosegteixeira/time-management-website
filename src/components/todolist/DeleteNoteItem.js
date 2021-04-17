import React from 'react';

const DeleteNoteItem = ({noteItem, deleteItem}) => {
  

  return (
    <td className="right column">
      <button className="ui icon button" onClick={() => deleteItem(noteItem)}>
        <i className="trash alternate icon large"></i>
      </button>
    </td>
  );
}


export default DeleteNoteItem;