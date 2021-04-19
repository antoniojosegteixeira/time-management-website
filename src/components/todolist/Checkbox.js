import React from 'react';

const Checkbox = ({noteItem, checkboxOutput}) => {
  let checkClass = "far fa-circle";


  noteItem.value ? checkClass = "fas fa-check-circle on" : checkClass = "far fa-circle";

  const toggleCheckbox = () => {
    const cloneNoteItem = { ...noteItem };
    checkboxOutput(cloneNoteItem);
  }

  const toggleElement = <i className={checkClass}></i>
  

  return (
    <div className="toggleIcon" onClick={() => toggleCheckbox()}>
      {toggleElement}
    </div>
  );
  
}


export default Checkbox;