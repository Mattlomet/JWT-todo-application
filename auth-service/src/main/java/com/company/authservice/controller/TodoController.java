package com.company.authservice.controller;

import com.company.authservice.models.Todo;
import com.company.authservice.util.feign.TodoFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoFeign todoFeign;


    @GetMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Todo getTodo(@PathVariable int id){
        return todoFeign.getTodo(id);
    }

    @GetMapping("/user/{userid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Todo> getAllTodoByUserId(@PathVariable Long userid){
        return todoFeign.getAllTodoByUserId(userid);
    }

    @GetMapping
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Todo> getAllTodos(){
        return todoFeign.getAllTodos();
    }

    @PostMapping
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Todo createTodo(@RequestBody Todo todo){
        System.out.println(todo.toString());
        return todoFeign.createTodo(todo);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public void updateTodo(@PathVariable int id, @RequestBody Todo todo){
        todoFeign.updateTodo(id,todo);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public void deleteTodo(@PathVariable int id){
        todoFeign.deleteTodo(id);
    }

}
