import { useState } from "react";
import './project.css';
const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const initalValues = {
  name: "peter",
  age: 24,
  message: "random message",
};

const Project = () => {
  const [people, setPeople] = useState(data);
  const [person, setPerson] = useState(initalValues);
  const handleClearAll = () => {
    setPeople([]);
  };
  const handleSingleRemove = (id) => {
    console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };

  const changeMessage = () => {
    setPerson({ ...person, message: "hello World" });
  };

  return (
    <>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={name} className={"item"}>
              <h4>{name}</h4>
              <button className="" onClick={() => handleSingleRemove(id)}>
                Remove Item
              </button>
            </div>
          );
        })}
        <button onClick={handleClearAll} className="btn">
          Clear All
        </button>
      </div>
      <div>
        <h2>
          object change
        </h2>
        <h3>
          {person.name}
        </h3>
        <h3>
          {person.age}
        </h3>
        <h3>
          {person.message}
        </h3>
        <button className="btn" onClick={changeMessage} >
          change message
        </button>
      </div>
    </>
  );
};

export default Project;
