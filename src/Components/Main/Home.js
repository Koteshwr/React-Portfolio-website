import './Main.css';
import pic1 from '../../images/pic1.jpg';
import MediaLinks from '../Others/MediaLinks/Media';

const Home = () => {
    return (
        <header id="home">
            <img src={pic1} alt="img" className="pic" />
            <div class="text">
                <h2>
                    Hi there,<br />
                    I am Koteswara Rao Pakeeri
                </h2>
                <p>
                    I am an Enthusiastic <span className="var-text" >Web Developer</span>
                </p>
                <a target="_blank" href="https://drive.google.com/file/d/1NMO9edrSL4Wa7Tiwi1y_2oKILwqIpGUG/view?usp=drive_link" class="btn">
                    My Resume
                </a>
                <a href="#contact" class="btn">
                    Hire Me
                </a><br></br>
                <MediaLinks />

            </div>

        </header>
    )
}
export default Home;