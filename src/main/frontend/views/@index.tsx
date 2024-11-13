import { useSignal } from '@vaadin/hilla-react-signals';
import { HeaderView } from './HeaderView';
import { NewTodoBar } from './NewTodoBar';
import { MainPage } from './MainPage';
import { useTodos } from '../util/useTodos';

export default function TodoView() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <>
      <HeaderView />
      <NewTodoBar onAdd={addTodo} />
      <MainPage todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
}