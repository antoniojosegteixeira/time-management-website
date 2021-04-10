import React from 'react';

const DeleteNoteItem = ({noteItem, deleteItem}) => {
  

  return (
    <td className="collapsing">
      <button class="ui icon button" onClick={() => deleteItem(noteItem)}>
        <i className="trash alternate icon large"></i>
      </button>
    </td>
  );
}


export default DeleteNoteItem;