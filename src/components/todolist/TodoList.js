import React from 'react';
import Input from './Input';
import NoteTable from './NoteTable';

const TodoList = ({noteCollection, setNoteCollection }) => {

  const handleItemAdd = (note) => {
    if(!note){
      return
    }

    for(let i in noteCollection){
      if(noteCollection[i].text === note){
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

  const checkboxOutput = (outputItem) => {
    for(let i in noteCollection){
      if(noteCollection[i].text === outputItem.text){
        const noteColClone = JSON.parse(JSON.stringify(noteCollection));
        noteColClone[i].value = !outputItem.value;
        setNoteCollection(noteColClone);
        console.log(noteColClone, noteCollection);
      }
    }
  }

  


  return (
    <div className="ui container fixed-width">
        <Input noteInput={handleItemAdd}></Input>
        <NoteTable noteCollection={noteCollection} deleteItem={deleteItem} checkboxOutput={checkboxOutput}/>
    </div>
  )

}


export default TodoList;
