import './Main.css';
import pic2 from '../../images/pic3.jpg';
const About = () => {
    const handleClick = () => {
        const popup = document.querySelector(".read-more");
        popup.style.display = "block";
    }
    return (
        <section className="card" id="about">
            <img src={pic2} alt="img" />
            <div className="text">
                <h1>About Me</h1>
                <p>
                    I am Kotesh Pakeeri And I am an Enthusiastic <span className="var-text">Web Developer</span><br /><br />
                    A passionate and motivated Computer Science and Engineering student at Lendi
                    Institute of Engineering and Technology. Graduating in 2024, I have a keen interest in web development and
                    software engineering, aiming to create meaningful digital experiences. <br /><br />

                    My core expertise lies in HTML, CSS, JavaScript, Java, Python, Node.js, React.js, and the MERN stack.
                    <br />....
                </p>
                <button className="btn btn-secondary" onClick={handleClick}>Read More</button>
                <div className="pop-up">
                    <div className="read-more">
                        <p>
                            I am Koteswara Rao Pakeeri And I am an Enthusiastic <span className="var-text">Web Developer</span><br /><br />
                            A passionate and motivated Computer Science and Engineering student at Lendi
                            Institute of Engineering and Technology. Graduating in 2024, I have a keen interest in web development and
                            software engineering, aiming to create meaningful digital experiences. <br /><br />

                            My core expertise lies in HTML, CSS, JavaScript, Java, Python, Node.js, React.js, and the MERN stack.
                            Through coursework and personal projects, I've built a strong foundation in both front-end and back-end
                            technologies, enabling me to develop dynamic and responsive web applications. <br /><br />

                            I continuously update myself with the latest industry trends and explore new languages, frameworks, and
                            tools. This commitment allows me to deliver modern and efficient solutions aligned with industry best
                            practices.

                            I excel in critical thinking and problem-solving, relishing challenges and finding innovative solutions. My
                            strong analytical skills help me break down complex problems into manageable components for robust and
                            scalable applications. <br /><br />

                            With honed collaboration and communication skills, I actively participate in coding communities and
                            contribute to open-source projects, valuing diverse perspectives to achieve shared goals.
                            <br /><br />
                            Eager to gain real-world experience, I am open to internships, freelance opportunities, or part-time
                            positions. My dedication, adaptability, and willingness to learn make me an asset to any development team.
                            Let's collaborate and create impactful digital solutions together.
                        </p>
                        <div className="read-btns">
                            <a target="_blank" href="https://drive.google.com/file/d/1NMO9edrSL4Wa7Tiwi1y_2oKILwqIpGUG/view?usp=drive_link" class="btn btn-secondary">
                                My Resume
                            </a>
                            <button className="btn btn-secondary" onClick={() => {
                                const popup = document.querySelector(".read-more");
                                popup.style.display = "none";
                            }}>close</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;