import { useEffect } from "react";
import { useState } from "react";
import people from "./data";
const Review = () => {

  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = people[index];
  const handleNumberCheck = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
        randomNumber = index + 1;
      }
    setIndex(handleNumberCheck(randomNumber))
  };

  const handlePrev = () => {
    setIndex(handleNumberCheck(index - 1));
  };

  const handleNext = () => {
    setIndex(handleNumberCheck(index + 1));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" />
        <span className="quote-icon">"</span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          {" "}
          prev
        </button>
        <button className="next-btn" onClick={handleNext}>
          {" "}
          next
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
