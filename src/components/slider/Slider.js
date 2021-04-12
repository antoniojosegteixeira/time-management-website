import React, {useEffect, useState} from 'react';
import SliderItem from './SliderItem';

const Slider = () => {
  const props = [
    {
      className: "tasks icon", 
      name: "To-do List"
    },
    { 
      className: "stopwatch icon",
      name: "Pomodoro"
    }
  ];

  const mapearProps = props.map((e) => {
    return (
      <SliderItem data={e}/>
    );
  })

  return (
      <header className="ui centered grid">
          {mapearProps}
      </header>
  )


}



export default Slider;