import { useEffect, useState } from 'react';

import { getTodos, createTodo, updateTodo, deleteTodoById } from './TodoService';
import Todo from 'Frontend/generated/com/lucas/challenge/data/Todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const todos = await getTodos();
      setTodos(todos);
    }
    fetchTodos();
  }, []);

  const addTodo = async (task: string) => {
    const newTodo = await createTodo(task);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = async (todo: Todo) => {
    const updatedTodo = await updateTodo({ ...todo, done: !todo.done });
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
  };

  const deleteTodo = async (id: number) => {
    const success = await deleteTodoById(id);
    if (success) {
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    } else {
      console.error(`Failed to delete todo with id: ${id}`);
    }
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}