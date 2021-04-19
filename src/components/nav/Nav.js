import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
  const props = [
    {
      className: "fas fa-stopwatch",
      name: "To-do List",
      url: "/todolist"
    },
    { 
      className: "fas fa-tasks",
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
      <header className="navcontainer">
          {mapProps}
      </header>
  )


}



export default Nav;