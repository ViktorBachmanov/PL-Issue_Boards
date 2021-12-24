import { Link } from "react-router-dom";
import { useState } from "react";
import { priorLevels, statusTypes } from '../../types'
import StoryPoints from '../../components/storyPoints'
import { getNextId } from './utils'
import React from 'react';


export default class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.initialTodo.title
        };

        this.priorityEl = React.createRef();
        this.statusEl = React.createRef();
        this.storyPointsEl = React.createRef();
        this.descriptionEl = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    get isValid() {
        return this.state.title;
    }

/*
    let [ todo, setTodo ] = useState(props.todo || 
        {
            id: getNextId(todos),
            title: '',
            description: '',
            priority: priorLevels.NONE,
            storyPoints: 1,
            status: statusTypes.NOT_SET,
        })*/

    handleChange(e)  {        
        this.setState({
            title: e.target.value
        });
       
    }

    handleSave() {
        this.props.dispatch({
            type: 'todos/todoSave',
            payload: {
                id: this.props.initialTodo.id,
                title: this.state.title,
                description: this.descriptionEl.current.value,
                priority: this.priorityEl.current.value,
                storyPoints: this.storyPointsEl.value,
                status: this.statusEl.current.value
            }
        });
    };
    

    render() {
        const initialTodo = this.props.initialTodo;

        return (
            <div className='edit-form'>
                <input placeholder='Title *' 
                        maxLength='100' 
                        className='edit-form__input-title_theme-1'
                        onChange={this.handleChange}
                        value={this.state.title}
                />

                <select defaultValue={initialTodo.priority} ref={this.priorityEl}>
                    <option hidden value={priorLevels.NONE}>Priority</option>
                    <option value={priorLevels.CRITICAL}>Critical</option>
                    <option value={priorLevels.MAJOR}>Major</option>
                    <option value={priorLevels.MINOR}>Minor</option>
                    <option value={priorLevels.NORMAL}>Normal</option>
                </select>

                <StoryPoints val={initialTodo.storyPoints} ref={this.storyPointsEl}/>

                <select defaultValue={initialTodo.status} ref={this.statusEl}>
                    <option hidden value={statusTypes.NOT_SET}>Status</option>
                    <option value={statusTypes.TO_DO}>{statusTypes.TO_DO}</option>
                    <option value={statusTypes.IN_PROGRESS}>{statusTypes.IN_PROGRESS}</option>
                    <option value={statusTypes.TEST}>{statusTypes.TEST}</option>
                    <option value={statusTypes.DONE}>{statusTypes.DONE}</option>
                </select>

                <textarea placeholder='Description' 
                            maxLength='300'
                            className='edit-form__textarea_theme-1'
                            defaultValue={initialTodo.description}
                            ref={this.descriptionEl}
                />

                <Link to='/'>
                    <button className="button button_blue" 
                            onClick={this.handleSave}
                            disabled={!this.isValid}
                    >
                        Save
                    </button>
                </Link>
            </div>
        );
    }
}