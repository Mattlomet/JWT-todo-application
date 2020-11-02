import React, {useState} from "react";

import TodoService from '../services/todo.service';
import {useSelector} from "react-redux";

const CreateTodo = (props) => {
    const [label, setLabel] = useState("");
    const [todo, setTodo] = useState("");


    const {user: currentUser} = useSelector((state) => state.auth);


    const handleSubmit = (event) => {
        event.preventDefault();

        let newTodo = {
            label: label,
            value: todo,
            userId: currentUser.id,
            completed: false,
        }

        TodoService.createTodo(newTodo).then(
            (response) => {
                props.setContent([...props.content,response.data])
            },
            (error) => {
                console.log(error);
            }
        );
    }


    return (
        <div className="container mt-5 ">
            <h3>Create a new Todo</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="label">label</label>
                    <input type="text" className="form-control labelInput" id="label" placeholder="Enter Label"
                           value={label} onChange={e => setLabel(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="todo">todo</label>
                    <input type="text" className="form-control todoInput" id="todo" placeholder="Enter Todo"
                           value={todo} onChange={e => setTodo(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary submitButton">Submit</button>
            </form>
        </div>
    );
};

export default CreateTodo;