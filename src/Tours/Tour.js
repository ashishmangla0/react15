import { useState } from "react"

const Tour  = ({id,name,image,price,info,removeTour}) =>{
    // const {name,...tour} = props;
    const [readmore,setReadMore] = useState(false);
    const handleReadMore = () =>{
        setReadMore(!readmore)
    }
    return(
        <article className="single-tour">
            <img src={image} alt={name} />
            <div className="footer">
                <div className="tour-info">
                    <h4 className="">{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readmore? info : `${info.substring(0,200)}...`}
                    <button onClick={handleReadMore}>{readmore ? 'show less':'read more'}</button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
            </div>
        </article>
    )
}


export default Tour