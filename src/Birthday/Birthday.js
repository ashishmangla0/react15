import { useState } from "react";
import data from "./data";
import List from "./List";

import './birthday.css';

console.log(data);

const Birthday = () => {

const [people,setPeople] =  useState(data);

const handleClear = () =>{
setPeople([]);
}


  return (
    <>

    <section className="container">
      <h3>
        {people.length} Birthday today

      </h3>
      <List people={people} />
      <button onClick={handleClear}> clear all</button>
    </section>
      
    </>
  );
};

<<<<<<< HEAD
export default Birthday;
=======
export default Birthday;
>>>>>>> e61e06c8ad574d4d2af2deda9d0fbed906d0b492
