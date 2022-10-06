import { useState } from "react";

const SingleQuestion = ({title, info,setShowInfo,showInfo,handleClick,active}) => {
//   const [showinfo, setShowInfo] = useState(false);

  return (
    <artical className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}></button>
      </header>
      {active && <p>{info}</p> }
     
    </artical>
  );
};

export default SingleQuestion;
