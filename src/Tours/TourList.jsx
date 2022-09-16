import Tour from "./Tour";

const TourList = (props) => {
  const { tours,removeTour } = props;
  console.log(removeTour);
  return (
    <>
    <section>
        <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
        </div>
        <div>
        {tours?.map((tour) => {
        // const { id,name,info,image } = tour;
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
        </div>
    </section>
      
    </>
  );
};

export default TourList;
