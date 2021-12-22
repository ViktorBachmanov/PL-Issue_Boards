import { Link } from "react-router-dom";


export default function Card(props) {
    return (
        <div className="card card_theme-1">
            <Link to={props.id}>{props.content}</Link>
        </div>
    );
}