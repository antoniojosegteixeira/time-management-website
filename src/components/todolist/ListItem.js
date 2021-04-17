import React from 'react';
import Checkbox from './Checkbox';
import DeleteNoteItem from './DeleteNoteItem';

const ListItem = ({noteItem, deleteItem, checkboxOutput}) => {

  return(
    <tr>
        <Checkbox noteItem={noteItem} checkboxOutput={checkboxOutput}/>
      <td className="fourteen wide column">
        {noteItem.text}
      </td>
        <DeleteNoteItem noteItem={noteItem} deleteItem={deleteItem}/>
    </tr>
  );

}


export default ListItem;