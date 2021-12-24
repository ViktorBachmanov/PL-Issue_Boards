import { Link } from "react-router-dom";
import { priorLevels, statusTypes } from '../../types'
import StoryPoints from '../../components/storyPoints'
import React from 'react';


export default class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.initialTodo.title
        };

        this.priorityEl = React.createRef();
        this.statusEl = React.createRef();
        this.descriptionEl = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    get isValid() {
        return this.state.title;
    }


    handleChange(e)  {        
        this.setState({
            title: e.target.value
        });
       
    }

    handleSave() {
        let stat = this.statusEl.current.value;
        if(stat === statusTypes.NOT_SET) {
            stat = statusTypes.TO_DO
        }

        this.props.dispatch({
            type: 'todos/todoSave',
            payload: {
                id: this.props.initialTodo.id,
                title: this.state.title,
                description: this.descriptionEl.current.value,
                priority: this.priorityEl.current.value,
                storyPoints: document.getElementById('story_points').value,
                status: stat
            }
        });
    };
    

    render() {
        const initialTodo = this.props.initialTodo;

        return (
            <div className='edit-form edit-form_theme-1'>
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

                <StoryPoints initialValue={initialTodo.storyPoints} />

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
                            className='description-text'
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