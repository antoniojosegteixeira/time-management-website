import React, {useEffect, useState} from 'react';
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
      <div className="ui three item menu medium">
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