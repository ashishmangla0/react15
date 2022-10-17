import { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(() =>{
    console.log('useEffect');
    window.addEventListener('resize',handleResize)
    return () =>{
        console.log('cleanUp');
        window.removeEventListener('resize',handleResize)
    }
  },[])

  return <>{size}</>;
};

export default UseEffectCleanup;
