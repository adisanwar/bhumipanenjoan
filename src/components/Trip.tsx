import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/9.jpg";
import Trip3 from "../assets/8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Trip Terkini</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut cum. Ipsam voluptates placeat, doloribus illum adipisci numquam nobis voluptate natus earum, aut quibusdam fugiat minima molestias explicabo asperiores veniam?</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip In Salem"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut cum. Ipsam voluptates placeat, doloribus illum adipisci numquam nobis voluptate natus earum, aut quibusdam fugiat minima molestias explicabo asperiores veniam?"
        />

        <TripData
          image={Trip2}
          heading="Trip In Tembongraja"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut cum. Ipsam voluptates placeat, doloribus illum adipisci numquam nobis voluptate natus earum, aut quibusdam fugiat minima molestias explicabo asperiores veniam?"
        />

        <TripData
          image={Trip3}
          heading="Trip In Babakan"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut cum. Ipsam voluptates placeat, doloribus illum adipisci numquam nobis voluptate natus earum, aut quibusdam fugiat minima molestias explicabo asperiores veniam?"
        />
      </div>
    </div>
  );
}

export default Trip;