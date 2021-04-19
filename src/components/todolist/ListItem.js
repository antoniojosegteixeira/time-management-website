import React from 'react';
import Checkbox from './Checkbox';
import DeleteNoteItem from './DeleteNoteItem';

const ListItem = ({noteItem, deleteItem, checkboxOutput}) => {

  return(
    <div className="listitem">
        <Checkbox noteItem={noteItem} checkboxOutput={checkboxOutput}/>
      <div className="innerColumn">
        {noteItem.text}
      </div>
        <DeleteNoteItem noteItem={noteItem} deleteItem={deleteItem}/>
    </div>
  );

}


export default ListItem;