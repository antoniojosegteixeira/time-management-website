import React from 'react';


const NavItem = ({data}) => {

  const onClick = (e) => {
    e.preventDefault();
    console.log('CLICADO EM', data.url)
    window.history.pushState({}, '', data.url);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
      <a 
        className="item growing" 
        style={{margin: '4rem 0 2.1rem 0', cursor: 'pointer'}}
        href={data.url}
        onClick={onClick}
      >
        <h2 className="ui icon header medium">
          <i className={data.className}></i>
          <div className="content">
            {data.name}
          </div>
        </h2>
      </a>

  )
}

export default NavItem;