import './SkillItem.css';
import parse from 'html-react-parser';
const SkillItem = (props) => {
    return (
        <div className="item">
            <div className="icon">
                {parse(props.item.code)}
            </div>
            <div className="item-title " id = {props.item.name}>{props.item.name}</div>
        </div>
    )
}

export default SkillItem;