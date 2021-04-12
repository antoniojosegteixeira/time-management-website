import React, {useState} from 'react';

const Input = ({noteInput}) => {
  const [inputText, setInputText] = useState('');

  const handleAddButtonClick = () => {
    noteInput(inputText);
  }

  return (
    <div className="ui center aligned container" style={{marginBottom: .8 + 'rem'}}>
      <div className="ui fluid action input">
        <input type="text" onChange={(e) => setInputText(e.target.value)}/>
        <button className="ui button" onClick={handleAddButtonClick}>Adicionar</button>
      </div>
    </div>
  )

}


export default Input;