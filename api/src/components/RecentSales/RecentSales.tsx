import SalesCard from "../salescard/SalesCard";
import "./RecentSales.css";

const RecentSales = () => {
    return (
        <>
            <div className="recentsales">
                <div className="recentContainer">
                    <div className="recentHeading">Recent Orders</div>
                    <SalesCard img="https://cloverstatic.com/menu-assets/items/PMRQ7JZNN2BMG_120x120.jpeg" foodname="White Rice and Pork Meat Stew" restaurant="Chicken Republic" price="N2800.00"/>
                    <SalesCard img="https://cloverstatic.com/menu-assets/items/S6YD0C6A8R1BM_576x576.jpeg" foodname="Cripsy Stuffed Chicken" restaurant="Mega Chicken" price="N5000.00"/>
                    <SalesCard img="https://cloverstatic.com/menu-assets/items/FQ4RYNV6RAPFG_576x576.jpeg" foodname="Jollof Rice and Moi Moi" restaurant="The Place" price="N4200.00"/>
                    <SalesCard img="https://cloverstatic.com/menu-assets/items/BQ43F1NPS2S82_576x576.jpeg" foodname="Cripsy Chicken Wings" restaurant="Yakoyo" price="N6500.00"/>
                    <SalesCard img="https://cloverstatic.com/menu-assets/items/D2TQ5HJM80HZ6_576x576.jpeg" foodname="Jollof Spaghetti and Shrimps" restaurant="Ibile Foods" price="N5500.00"/>
                </div>
            </div>

        </>
    )
}

export default RecentSales
