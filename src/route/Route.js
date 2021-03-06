import {useState, useEffect} from 'react';

const Route = ({children, url}) => {
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


  return currentPath === url ? children : null;
}

export default Route;