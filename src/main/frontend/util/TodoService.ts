import Todo from "Frontend/generated/com/lucas/challenge/data/Todo";
import { add, deleteById, findAll, update, } from "Frontend/generated/TodoEndpoint";


export async function getTodos(): Promise<Todo[]> {
  return await findAll();
}

export async function createTodo(task: string): Promise<Todo> {
  return await add(task);
}

export async function updateTodo(todo: Todo): Promise<Todo> {
  return await update(todo);
}

export async function deleteTodoById(id: number): Promise<boolean> {
  return await deleteById(id);
}