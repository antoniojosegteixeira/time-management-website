import React, {useEffect, useState} from 'react';

const NavItem = ({data}) => {

  const onClick = (e) => {
    e.preventDefault();
    console.log('CLICADO EM', data.url)
    window.history.pushState({}, '', data.url);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
   });
   let headerClass = "stand"
   window.location.pathname === "/" ? headerClass = "largeHeader" : headerClass = "smallHeader";

  return (
      <a 
        className={`growing ${headerClass}`} 
        href={data.url}
        onClick={onClick}
      >
        <div className="flexcentered down">
          <i className={data.className}></i>
          <i className="fa fass-tasks"></i>
          <h3>
            {data.name}
          </h3>
        </div>
      </a>
  )
}

export default NavItem;