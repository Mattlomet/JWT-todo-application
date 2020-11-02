import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/todo";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getTodoById = (userid) => {
    return axios.get(API_URL +"/" + userid, { headers: authHeader() });
};

const getAllTodosByUserId = (userid) => {
    return axios.get(API_URL + "/user/" + userid, { headers: authHeader() });
};

const getAllTodos = () => {
    return axios.get(API_URL, { headers: authHeader() });
};

const createTodo = (todo) => {
    console.log(todo)
    return axios.post(API_URL, { label: todo.label, value: todo.value, userId: todo.userId, completed: todo.completed }, {headers: authHeader()});
};

const updateTodo = (todo) => {
    return axios.put(API_URL+ "/" + todo.id, { label: todo.label, value: todo.value, userId: todo.userId, completed: todo.completed }, {headers: authHeader()});
};

const deleteTodo = (todoId) => {
    return axios.delete(API_URL+"/"+todoId,{headers: authHeader()});
};

export default {
    getTodoById,
    getAllTodosByUserId,
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
};