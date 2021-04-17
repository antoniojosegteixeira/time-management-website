import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
  const props = [
    {
      className: "tasks icon", 
      name: "To-do List",
      url: "/todolist"
    },
    { 
      className: "stopwatch icon",
      name: "Pomodoro",
      url: "/pomodoro"
    }
  ];

  const mapProps = props.map((e) => {
    return (
      <NavItem key={e.url} data={e}/>
    );
  })

  return (
      <header className="ui centered grid">
          {mapProps}
      </header>
  )


}



export default Nav;