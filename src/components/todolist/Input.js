import React, {useState} from 'react';

const Input = ({noteInput}) => {
  const [inputText, setInputText] = useState('');

  const handleAddButtonClick = () => {
    noteInput(inputText);
  }

  return (
      <div className="ui fluid action input" style={{marginBottom: .8 + 'rem'}}>
        <input type="text" onChange={(e) => setInputText(e.target.value)}/>
        <button className="ui button" onClick={handleAddButtonClick}>Add</button>
      </div>
  )

}


export default Input;