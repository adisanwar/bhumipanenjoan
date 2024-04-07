import { Component } from "react";
import "./DestinationStyle.css";

interface DestinationDataProps {
    heading: string;
    text: string;
    img1: string;
    img2: string;
    className: string
  }

class DestinationData extends Component<DestinationDataProps> {
    render() {
        return (
            <div className="destination">
            <div className={this.props.className}>
                <div className="dest-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    </div>
                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        </div>
        )
    }
}

export default DestinationData;
