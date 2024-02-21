import { Component } from "react";
import "./DestinationStyle.css";
import DestImg1 from "../assets/8.jpg";
import DestImg2 from "../assets/9.jpg";
// import DestImg3 from "../assets/10.jpg";
// import DestImg4 from "../assets/1.jpg";

class DestinationData extends Component {
    render() {
        return (
            <div className="destination">
            <div className="first-dest">
                <div className="dest-text">
                    <h2>Pemandangan</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur consectetur porro quia excepturi cumque nisi repudiandae sunt, repellat maiores culpa voluptate odit quae voluptates similique distinctio velit iusto dolores blanditiis.</p>
                </div>
                <div className="image">
                    <img src={DestImg1} alt="img" />
                    <img src={DestImg2} alt="img" />
                </div>
            </div>
        </div>
        )
    }
}

export default DestinationData;