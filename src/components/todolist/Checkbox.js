import React from 'react';

const Checkbox = ({noteItem, checkboxOutput}) => {
  let bool = "off";


  noteItem.value ? bool = "on" : bool = "off";

  const toggleCheckbox = () => {
    const cloneNoteItem = { ...noteItem };
    checkboxOutput(cloneNoteItem);
  }

  const toggleElement = <i className={`toggle ${bool} icon large toggleButton ${bool}`}></i>
  

  return (
    <td onClick={() => toggleCheckbox()}>
      {toggleElement}
    </td>
  );
  
}


export default Checkbox;