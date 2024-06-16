import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Kirim Kami Pesan!</h1>
      <form action="">
        <input placeholder="Name" type="text" name="" id="" />
        <input placeholder="Email" type="text" name="" id="" />
        <input placeholder="Subject" type="text" name="" id="" />
        <textarea
          placeholder="Mesage"
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
        <button>Kirim</button>
        <br />
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.511088157087!2d108.7485394!3d-7.1401302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f77005b5d3929%3A0xa138e0ed1b1eedb1!2sBhumi%20Panenjoan%20salem!5e0!3m2!1sen!2sid!4v1713594265655!5m2!1sen!2sid"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen // Change allowfullscreen to allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Changed referrerpolicy to referrerPolicy
      ></iframe>
    </div>
  );
}

export default ContactForm;
