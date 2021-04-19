import React from 'react';


const Timer = ({currentTime}) => {

  const convertTime = () => {
    const minutes = Math.floor(currentTime/60);
    const seconds = (currentTime - minutes*60);
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
  }

  return (
    <h1 style={{fontSize: 4 + 'em'}}>{convertTime()}</h1>
  )
}

export default Timer;