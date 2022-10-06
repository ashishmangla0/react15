import { useState } from "react";
import "./accordion.css";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  const [showinfo, setShowInfo] = useState("");
  const handleClick = (id) => {
    if (showinfo === id) {
      return setShowInfo(0);
    }
    setShowInfo(id);
  };

  return (
    <main>
      <div className="container">
        <h3>Questions and answers</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion
                active={showinfo === question.id}
                key={question.id}
                handleClick={() => handleClick(question.id)}
                {...question}
              ></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
