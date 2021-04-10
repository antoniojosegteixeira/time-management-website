import React, {useState, useEffect} from 'react';
import Checkbox from './Checkbox';
import DeleteNoteItem from './DeleteNoteItem';

const ListItem = ({noteItem, deleteItem}) => {
  const [animationStyle, setAnimationStyle] = useState('');
  
  useEffect(() => {
    setAnimationStyle('on');
  }, []);

  console.log(noteItem, 'noteitem');
  return(
    <tr className={`listTransition ${animationStyle}`}>
        <Checkbox itemValue={noteItem.value}/>
      <td>
        {noteItem.text}
      </td>
        <DeleteNoteItem noteItem={noteItem} deleteItem={deleteItem}/>
    </tr>
  );

}


export default ListItem;