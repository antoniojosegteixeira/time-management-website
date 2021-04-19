import React, {useState, useEffect} from 'react';
import "./styles/main2.css";
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
      time: 5
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

  let timer;
  const originalTime = timers[activeIndex].time * 60;


  useEffect(() => {
    console.log(toggle);
    if(toggle){
      console.log('ativado')
      timer = setTimeout(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    }

    if(!toggle){
      setCurrentTime(timers[activeIndex].time * 60);
    }

    if(currentTime <= 0){
      setToggle(false);
      setCurrentTime(timers[activeIndex].time * 60);
      alert("Hey! Your time is up!");
    }

    return () => {clearTimeout(timer)}
  }, [toggle, currentTime]);

  useEffect(() => {
    setToggle(false);
    setCurrentTime(originalTime);
  }, [originalTime]);


  //TODO LIST CODE
  const [noteCollection, setNoteCollection] = useState([]);

  useEffect(() => {
    console.log('collection', noteCollection);
  }, [noteCollection])

  return (
    <div>
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