import { useSignal } from '@vaadin/hilla-react-signals';
import { HeaderView } from './HeaderView';
import { NewTodoBar } from './NewTodoBar';
import { MainPage } from './MainPage';
import { useTodos } from '../util/useTodos';
import { useEffect } from 'react';

export default function TodoView() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  useEffect(() => {
    document.title = 'Meus afazeres';
  }, []);

  return (
    <>
      <HeaderView />
      <NewTodoBar onAdd={addTodo} />
      <MainPage todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
}