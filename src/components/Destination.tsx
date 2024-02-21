// import DestImg1 from "../assets/8.jpg";
// import DestImg2 from "../assets/9.jpg";
// import DestImg3 from "../assets/10.jpg";
// import DestImg4 from "../assets/1.jpg";
import "../components/DestinationStyle.css"
import DestinationData from "./DestinationData"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse eum accusantium alias voluptas provident cumque sunt ex ab architecto sequi eligendi, atque placeat voluptatibus perferendis ea repudiandae itaque fugiat?</p>
            <DestinationData/>
        </div>
    )
}

export default Destination;