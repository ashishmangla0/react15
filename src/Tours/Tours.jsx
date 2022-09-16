import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import TourList from "./TourList";
import "./tours.css";

const url = "https://course-api.com/react-tours-project";
//const url = 'https://course-api.netlify.app/api/react-tours-project';

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const removeTour = (id) => {
    console.log("asdf");
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id );
    setTours(newTours)
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  else if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <div class="underline"></div>
          <button onClick={fetchTours} className="btn">
            Refresh Tours
          </button>
        </div>
      </main>
    )

  }
  else{
    return (
      <main>
        <TourList tours={tours} removeTour={removeTour} />
      </main>
    );
  }

 
};

export default Tours;
