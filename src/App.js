import React from 'react';
import "./styles/main.css";
import TodoList from './components/todolist/TodoList';
import Slider from './components/slider/Slider';


const App = () => {
  return (
    <div>
      <Slider/>
      <TodoList/>
    </div>
  );

}



export default App;