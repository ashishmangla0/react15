import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import TourList from "./TourList";
import "./tours.css";

const url = 'https://course-api.com/react-tours-project'
//const url = 'https://course-api.netlify.app/api/react-tours-project';




const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);


  const fetchTours  =  async() =>{
    setLoading(true);

try{
    const response = await fetch(url)
    const tours = await response.json();
    setTours(false);
    setTours(tours)
}
catch(e){
    setLoading(false);
    console.log(e);

}

  }

  useEffect(() =>{
    fetchTours()
  },[])



  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <TourList tours={tours} />
    </main>
  );
};

export default Tours;
