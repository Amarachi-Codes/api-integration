import RecentSales from "../../../components/RecentSales/RecentSales"
import Homebody from "../HomeBody/Homebody"
import "./homepage.css"

const Homepage = () => {
  return (
    <div className="homepage">
      <Homebody/>
      <RecentSales/>
    </div>
  )
}

export default Homepage
