import { Fragment } from "react";
import { useParams } from "react-router-dom";


export default function Description(props) {
    let { todoId } = useParams();

    return (
        <Fragment>
            <h2>{todoId}</h2>

        </Fragment>
    );
};