import React from 'react';

const Checkbox = ({noteItem, checkboxOutput}) => {
  let bool = "off";


  noteItem.value ? bool = "on" : bool = "off";

  const toggleCheckbox = () => {
    const cloneNoteItem = { ...noteItem };
    checkboxOutput(cloneNoteItem);
  }

  const toggleElement = <i className={`toggle ${bool} icon ${bool}`}></i>
  

  return (
    <div className="toggleIcon" onClick={() => toggleCheckbox()}>
      {toggleElement}
    </div>
  );
  
}


export default Checkbox;