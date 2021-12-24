import { Link } from "react-router-dom";
import PriorityPic from './priorityPic'


export default function Card(props) {

    const handleDragStart = (ev) => {
        ev.dataTransfer.setData("plain/text", props.id);
        ev.dataTransfer.effectAllowed = "move";
    }

    return (
        <div className="card card_theme-1" draggable="true" onDragStart={handleDragStart}>
            <Link to={props.id} draggable='false'>{props.content}</Link>

            <div className="card__footer">
                <PriorityPic level={props.level} />
                <div className="story-points-pic story-points-pic_theme-1">{props.storyPoints}</div>
                <div className="card__id">{props.id}</div>
            </div>
        </div>
    );
}