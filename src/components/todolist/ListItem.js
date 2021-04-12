import React from 'react';
import Checkbox from './Checkbox';
import DeleteNoteItem from './DeleteNoteItem';

const ListItem = ({noteItem, deleteItem}) => {

  console.log(noteItem, 'noteitem');
  return(
    <tr>
        <Checkbox itemValue={noteItem.value}/>
      <td>
        {noteItem.text}
      </td>
        <DeleteNoteItem noteItem={noteItem} deleteItem={deleteItem}/>
    </tr>
  );

}


export default ListItem;