import "./ContactFormStyle.css";

function ContactForm() {
    return(
        <div className="from-container">
            <h1>Kirim Kami Pesan!</h1>
            <form action="">
                <input placeholder="Name" type="text" name="" id="" />
                <input placeholder="Email" type="text" name="" id="" />
                <input placeholder="Subject" type="text" name="" id="" />
                <textarea placeholder="Mesage" name="" id="" cols={30} rows={10}></textarea>
                <button>Kirim</button>
            
                
            </form>
        </div>
    )
}

export default ContactForm;
