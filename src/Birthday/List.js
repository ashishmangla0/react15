const List = (props) =>{
   const {people} = props
    return(
        <>
        {people.map((persone,index) => {
const {name,id,age,image} = persone
return <article key={index} className="person">
    <img src={image} alt={name} />
    <div>
        <h4>{name}</h4>
        <p>{age} years</p>
    </div>
</article>
        })}
        </>
    )
}






export default List