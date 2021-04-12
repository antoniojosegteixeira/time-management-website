import React from 'react';
import ListItem from './ListItem';

const NoteTable = ({noteCollection, deleteItem}) => {

  const mapNoteCollection = () => {
    let listElements = noteCollection.map((noteItem) => {
      console.log(noteItem)
      return (
        <ListItem key={noteItem.text} noteItem={noteItem} deleteItem={deleteItem}/> 
      )
    });
    return listElements;
  }

  if(noteCollection.length === 0){
    return null
  }

  return (
     <div className="ui container">
        <table className="ui table wide">
          <tbody>   
            {mapNoteCollection()}     
          </tbody>
        </table>
      </div>
  );
}








export default NoteTable;