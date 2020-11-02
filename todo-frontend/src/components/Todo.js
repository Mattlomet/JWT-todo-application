import React, {useState, useEffect} from "react";

import TodoService from '../services/todo.service';
import {useSelector} from "react-redux";
import CreateTodo from "./CreateTodo";

const Todo = () => {
    const [content, setContent] = useState([]);


    const {user: currentUser} = useSelector((state) => state.auth);

    useEffect(() => {
        TodoService.getAllTodosByUserId(currentUser.id).then(
            (response) => {
                let newContent = [...response.data]
                setContent(newContent);
            },
            (error) => {
                console.log(error);
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    const deleteTodo = (taskId, index)=>{
        TodoService.deleteTodo(taskId).then(
            (response) => {
                console.log(response)
                content.splice(index,1)
                setContent([...content])
            },
            (error) => {
                console.log(error);
            })
    }

    const completeTodo = (task,index) =>{

        task.completed = "true";

        TodoService.updateTodo(task).then(
            (response) => {
                content.splice(index,1)
                setContent([...content,task])
            },
            (error) => {
                console.log(error);
            })
    }




    return (
        <div className="container">
            <header className="jumbotron">
                <table className="w-100">
                    <tbody>
                    <tr className="text-center">
                        {/*<th>#</th>*/}
                        <th>label</th>
                        <th>todo</th>
                        <th>completed</th>
                        <th>finish</th>
                        <th>delete</th>
                    </tr>
                    {content.map((task, index) => (
                        <tr className="text-center" key={index}>
                            {/*<td>{task.id}</td>*/}
                            <td>{task.label}</td>
                            <td>{task.value}</td>
                            <td className="completed">{task.completed}</td>
                            <td onClick={()=>completeTodo(task,index)} className="handSelect update">
                                <span className="material-icons">
                                    check
                                </span>
                            </td>
                            <td onClick={()=>deleteTodo(task.id, index)} className="handSelect delete">
                                <span className="material-icons" >
                                    delete
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <CreateTodo setContent={setContent} content={content}/>

            </header>
        </div>
    );
};

export default Todo;