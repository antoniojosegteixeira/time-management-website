import React, {useState, useEffect} from 'react';

const Checkbox = ({noteItem}) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(noteItem);
  }, [noteItem])

  const toggleElement = () => {
    if(toggle){
      return <i className="toggle on icon large toggleButton on"></i>
    } else {
      return <i className="toggle off icon large toggleButton"></i>
    }
  }

  return (
    <td className="collapsing" onClick={() => setToggle(!toggle)}>
      {toggleElement()}
    </td>
  );
  
}


export default Checkbox;