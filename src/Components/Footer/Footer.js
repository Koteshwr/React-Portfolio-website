import "../Footer/Footer.css"
import '../Main/Main.css'
import MediaLink from '../Others/MediaLinks/Media'
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Developed by Koteswara Rao Pakeeri</p>
                <p>Copyright &copy; 2023 PKR</p>
                <MediaLink className="footer-media"/>
            </div>
        </footer>
    )
}
export default Footer;