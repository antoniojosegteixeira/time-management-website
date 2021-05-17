import React, {useState, useEffect} from 'react';
import "./styles/main.css";
import Route from './route/Route';
import TodoList from './components/todolist/TodoList';
import Nav from './components/nav/Nav';
import Pomodoro from './components/pomodoro/Pomodoro';

const App = () => {

  // POMODORO CODE
  const timers = [
    {
      name: "Pomodoro",
      time: 25
    },
    {
      name: "Short Break",
      time: 0.1
    },
    {
      name: "Long Break",
      time: 15
    },
  ];

  //states
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState(timers[activeIndex].time * 60);
  const originalTime = timers[activeIndex].time * 60;


  useEffect(() => {
    if(toggle){
      let oneSecTimer = setTimeout(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
      return () => clearTimeout(oneSecTimer);
    }

    if(!toggle){
      setCurrentTime(originalTime);
    }
  }, [toggle, currentTime, originalTime]);


  useEffect(() => {
    setCurrentTime(originalTime);
    setToggle(false);
  }, [activeIndex, originalTime]);


  // TIME OFF
  const isTimeOver = () => {
    if(currentTime <= 0){
      setToggle(false);
      setCurrentTime(originalTime);
      alert("Hey! Your time is up!");
    }
  }
  isTimeOver();






  //TODO LIST CODE
  const [noteCollection, setNoteCollection] = useState([]);

  return (
    <div className="content">
      <Nav/>
      <Route url="/todolist">
        <TodoList
          noteCollection={noteCollection}
          setNoteCollection={setNoteCollection}
        />
      </Route>
      <Route url="/pomodoro">
        <Pomodoro
          timers={timers}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          toggle={toggle}
          setToggle={setToggle}
          currentTime={currentTime}
        />
      </Route>

    </div>
  );

}



export default App;