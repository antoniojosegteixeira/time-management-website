import React, {useState} from 'react';

const Input = ({noteInput}) => {
  const [inputText, setInputText] = useState('');

  const handleAddButtonClick = () => {
    noteInput(inputText);
  }

  return (
      <div className="inputContainer">
        <input type="large text" onChange={(e) => setInputText(e.target.value)}/>
        <button onClick={handleAddButtonClick}>Add</button>
      </div>
  )

}


export default Input;