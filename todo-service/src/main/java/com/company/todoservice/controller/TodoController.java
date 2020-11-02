package com.company.todoservice.controller;


import com.company.todoservice.dao.TodoRepository;
import com.company.todoservice.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("/todo")
public class TodoController {

    private TodoRepository todoRepository;

    @Autowired
    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable int id){
        return todoRepository.getOne(id);
    }

    @GetMapping("/user/{userid}")
    public List<Todo> getAllTodoByUserId(@PathVariable Long userid){
        return todoRepository.getAllByUserId(userid);
    }

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo){
        return todoRepository.save(todo);
    }

    @PutMapping("/{id}")
    public void updateTodo(@PathVariable int id, @RequestBody Todo todo){
        System.out.println(todo);
        todoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable int id){
        todoRepository.deleteById(id);
    }

}
