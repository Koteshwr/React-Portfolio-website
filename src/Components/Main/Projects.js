import './Main.css';
import pic4 from '../../images/pic4.jpg';
import '../Main/ProjectCards/style.css';
import CardDetails from '../Main/ProjectCards/CardDetails';
import ProjectCard from './ProjectCards/ProjectCard';

const Projects = () => {
    return (
        <section class="card" id="projects">
            <img src={pic4} alt="img" />
            <div class="text project-card">
                <div>
                    <h1>
                        My Projects
                    </h1>
                    <div className="work-container">
                        {
                            CardDetails.map((item) => (
                                <ProjectCard item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Projects;