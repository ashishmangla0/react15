import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];




function App() {
  const [people, setPeople] = useState(data);
  const handleClearAll = () =>{
    setPeople([]);
  }
  const handleSingleRemove = (id) =>{
console.log(id);
let newPeople = people.filter((person)=> person.id !== id);
console.log(newPeople);
setPeople(newPeople);
  }
  return (
    <div className="App">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={name} className={'item'}>
            <h4>{name}</h4>
            <button className="" onClick={ () => handleSingleRemove(id)}>Remove Item</button>
          </div>
        );
      })}
      <button onClick={handleClearAll} className="btn">
        Clear All
      </button>
    </div>
  );
}

export default App;
