import React, {useState} from 'react';
import Input from './Input';
import NoteTable from './NoteTable';

const TodoList = () => {
  const [noteCollection, setNoteCollection] = useState([]);

  const handleItemAdd = (note) => {
    if(!note){
      console.log("nn tem nada");
      return
    }

    for(let i in noteCollection){
      if(noteCollection[i].text === note){
        console.log("jÁ TEM, CANCELA");
        return
      }
    }

    const noteObject = {
      text: note,
      value: false
    };
    const noteColCopy = noteCollection;
    setNoteCollection([...noteColCopy, noteObject]);
  }

  const deleteItem = (item) => {
    console.log("chegou o delete", item);
    for(let i in noteCollection){
      if(noteCollection[i].text === item.text){
        const noteColCopy = noteCollection;
        const noteColUpdated = noteColCopy.filter((e) => {
          return e !== item
        });
        setNoteCollection(noteColUpdated);
      }
    }
  }

  return (
    <div>
      <Input noteInput={handleItemAdd}></Input>   
      <NoteTable noteCollection={noteCollection} deleteItem={deleteItem}/>
    </div>
  )

}


export default TodoList;

/* 
         TodoList
    Input        NoteTable
                    ListItem
               Checkbox DeleteNoteItem




*/