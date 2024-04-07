import "./TripStyle.css";

function TripData(props: any) {
  const handleWhatsAppButtonClick = () => {
    window.open(props.whatsappLink, "_blank");
  };

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <br />
      {props.whatsappLink && (  // Memeriksa apakah properti whatsappLink ada
        <button className="whatsapp-button" onClick={handleWhatsAppButtonClick}>
          Hubungi via WhatsApp
        </button>
      )}
    </div>
  );
}

export default TripData;
