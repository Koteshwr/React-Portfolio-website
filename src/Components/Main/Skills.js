import './Main.css';
import pic3 from '../../images/pic2.jpg';
import SkillItem from './SkillItem/SkillItem';
import Icons from './SkillItem/Icons';

const Skills = () => {
    
    return (
        <section className="card" id="skills">
            <img src={pic3} alt="img" />
            <div className="text">
                <div>
                    <h1>
                        Skills
                    </h1>
                    <div className="skill-items" >
                    {Icons.map((item) => (
                        <SkillItem className="skills" item={item}  />
                    ))}
                    </div>

                    {/* <a href="#" class="btn">Join the community</a> */}
                </div>
            </div>
        </section>
    )
}

export default Skills;