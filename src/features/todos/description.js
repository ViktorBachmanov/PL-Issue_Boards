import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from './editForm';
//import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default class Description extends React.Component {
    constructor(props) {
        super(props);

        

        this.state = {
            mode: 'READ'
        }

       // this.todoId = useParams();
       const location = window.location;
       const todoId = location.pathname.substring(1);    // strip leading slash

        this.handleEdit = this.handleEdit.bind(this);

        this.view = (
            <Fragment>
                <h2>{todoId}</h2>
                <button className="button button_orange" onClick={this.handleEdit}>Edit</button>
            </Fragment>
        );
    }
    

    //const [mode, setMode] = useState('READ');   //   READ / EDIT

    

    handleEdit() {
        this.view = <EditForm/>
        //setMode('EDIT');
        this.setState({
            mode: 'EDIT'
        })
        //forceUpdate();
    };


    render() {
        return this.view;

    }
};