package com.lucas.challenge.endpoint;

import com.lucas.challenge.data.Todo;
import com.lucas.challenge.data.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoint {

    private TodoRepository repository;

    TodoEndpoint(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo add(String task) {
        return repository.save(new Todo(task));
    }

    public Todo update(Todo todo) {
        return repository.save(todo);
    }

    public boolean deleteById(Long id) { if (repository.existsById(id)) {
        repository.deleteById(id);
        return true;
    }
    return false; }
}
