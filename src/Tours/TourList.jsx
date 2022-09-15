import Tour from "./Tour"

 const TourList = (props) =>{
    const {tours} = props
return (
    <>
   {tours?.map((tour) =>{
    const {name} = tour

    return <Tour name={name}/>

   })}
    
    </>
)
 }

 export default TourList