import './style.css';
import '../../Main/Main.css';
import parse from 'html-react-parser';
const ProjectCard = (props) => {
    return (
        // <div className="work-card" >
        //     <img className="pic" src={props.item.url}  alt="pic"/>
        //     <p className="work-title">{props.item.name}</p>
        //     <a href={props.item.link} className="btn btn-secondary">View</a>
        // </div>
        <div className="work-card">
            <div className="img-box">
                <img src={props.item.url} alt="pic" />
            </div>
            <div className="content">
                <h2>{props.item.name}</h2>
                <p>
                    {parse(props.item.content)}
                </p>
                <a className="btn btn-secondary view-btn" target="_blank" href={props.item.link}>View Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    )
}

export default ProjectCard;