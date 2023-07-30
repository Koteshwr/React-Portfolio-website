import './Main.css';
import pic5 from '../../images/pic5.jpg';
import MediaLinks from '../Others/MediaLinks/Media';
import Mail_id from '../Others/assets/Mail'

const Contact = () => {
    const sendMail = () => {
        const email = Mail_id;
        const subject = 'Your Subject Here'; 
        const body = 'Your Message'; 

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }
    return (
        <section className="card contact-card" id="contact">
            <img src={pic5} alt="img" />
            <div className="text">
                <div>
                    <h1>
                        Find Me On
                    </h1>
                    <MediaLinks className="c-media" />
                    <h2>Connect With Me via Email</h2>
                    <button className="btn btn-secondary" onClick={sendMail} >Send Mail <i className="fa-regular fa-envelope"></i></button>
                </div>
            </div>
        </section>
    )
}
export default Contact;