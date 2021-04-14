import React, {useEffect, useState} from 'react';
import Timer from './Timer';

const Pomodoro = () => {
  const timers = [
    {
      name: "Pomodoro",
      time: 25
    },
    {
      name: "Short Break",
      time: 1
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
    }

    return () => {clearTimeout(timer)}
  }, [toggle, currentTime]);

  useEffect(() => {
    setToggle(false);
    setCurrentTime(originalTime);
  }, [originalTime]);


  const buttonText = () => {
    let text;
    toggle ? text = "Stop" : text = "Start";
    return text;
  }

  //map the available timers
  const mapItems =  () => {
    const itemsRendered = timers.map((e, i) => {
      let itemClass = "";
      if(activeIndex === i) {
        itemClass = "active";
      }
      return <a 
        key={i}
        className={`item ${itemClass}`} 
        onClick={() => setActiveIndex(i)}>
          {e.name}
        </a>
    });
    return itemsRendered;
  }

  return (
    <div className="ui container" style={{width: 300+'px'}}>
      <div className="ui three item menu">
        {mapItems()}
      </div>
      <div className="ui container">
        <div className="ui centered grid">
          <div className="row">
            <div className="clock circle">
              <Timer 
                currentTime={currentTime}
                toggle={toggle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ui centered grid" style={{marginTop: '20px'}}>
        <div className="ui button" onClick={() => setToggle(!toggle)}>
          {buttonText()}
        </div>
      </div>
    </div>
  );

}



export default Pomodoro;