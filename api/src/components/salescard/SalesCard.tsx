import "./Salescard.css";
interface ICard{
    img: string
    foodname: string
    restaurant: string
    price: string
}

const SalesCard = ({img, foodname, restaurant, price}:ICard) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <div className="item">
                    <p>{foodname}</p>
                    
                    <p>{restaurant}</p>
                  
                </div>
                <div className="price">
                    <p>{price}</p>
                   
                </div>
            </div>
        </>
    )
}

export default SalesCard
