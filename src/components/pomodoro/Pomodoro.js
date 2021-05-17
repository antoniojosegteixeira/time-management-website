import React from 'react';
import Timer from './Timer';

const Pomodoro = ({timers, activeIndex, setActiveIndex, toggle, setToggle, currentTime}) => {

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
      return <button
        key={i}
        className={`${itemClass}`} 
        onClick={() => setActiveIndex(i)}>
          {e.name}
        </button>
    });
    return itemsRendered;
  }

  return (
    <div className="flexcentered down">
      <div className="timemenu">
        {mapItems()}
      </div>
      <div className="circlecontainer">
        <div className="clock circle">
          <Timer 
            currentTime={currentTime}
            toggle={toggle}
          />
        </div>
        <button onClick={() => setToggle(!toggle)}>
          {buttonText()}
        </button>
      </div>
    </div>
  );

}



export default Pomodoro;