import SalesCard from "../salescard/SalesCard";
import "./RecentSales.css";

const RecentSales = () => {
    return (
        <>
            <div className="recentsales">
                <div className="recentContainer">
                    <div className="recentHeading">Recent Orders</div>
                    <SalesCard/>
                    <SalesCard/>
                    <SalesCard/>
                    <SalesCard/>
                    <SalesCard/>
                </div>
            </div>

        </>
    )
}

export default RecentSales
