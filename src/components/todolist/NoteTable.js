import React from 'react';
import ListItem from './ListItem';

const NoteTable = ({noteCollection, deleteItem, checkboxOutput}) => {

  const mapNoteCollection = () => {
    let listElements = noteCollection.map((noteItem) => {
      return (
        <ListItem key={noteItem.text} noteItem={noteItem} deleteItem={deleteItem} checkboxOutput={checkboxOutput}/> 
      )
    });
    return listElements;
  }

  if(noteCollection.length === 0){
    return null
  }

  return (
      <table className="ui tablet stackable table">
        <tbody>   
          {mapNoteCollection()}     
        </tbody>
      </table>
  );
}








export default NoteTable;