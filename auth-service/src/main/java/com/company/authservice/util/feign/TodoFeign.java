package com.company.authservice.util.feign;


import com.company.authservice.models.Todo;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@FeignClient(name = "todo-service")
public interface TodoFeign {

    @GetMapping("/todo/{id}")
    public Todo getTodo(@PathVariable int id);

    @GetMapping("/todo/user/{userid}")
    public List<Todo> getAllTodoByUserId(@PathVariable Long userid);

    @GetMapping("/todo")
    public List<Todo> getAllTodos();

    @PostMapping("/todo")
    public Todo createTodo(@RequestBody Todo todo);

    @PutMapping("/todo/{id}")
    public void updateTodo(@PathVariable int id, @RequestBody Todo todo);

    @DeleteMapping("/todo/{id}")
    public void deleteTodo(@PathVariable int id);
}
