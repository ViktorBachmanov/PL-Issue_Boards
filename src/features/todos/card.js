import { Link } from "react-router-dom";


export default function Card(props) {

    const handleDragStart = (ev) => {
        //ev.dataTransfer.setData("application/x-moz-node", ev.target);
        ev.dataTransfer.setData("plain/text", props.id);
        ev.dataTransfer.effectAllowed = "move";
    }

    return (
        <div className="card card_theme-1" draggable="true" onDragStart={handleDragStart}>
            <Link to={props.id} draggable='false'>{props.content}</Link>
        </div>
    );
}