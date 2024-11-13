import { TaskItem } from './TaskItem';
import Todo from 'Frontend/generated/com/lucas/challenge/data/Todo';
import { EmptyView } from './EmptyView';

interface MainPageProps {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

export function MainPage({ todos, onToggle, onDelete }: MainPageProps) {
  const createdTasksCount = todos.length;
  const completedTasksCount = todos.filter((todo) => todo.done).length;

  return (
    <div className="main-page">
      <div className="task-counters">
        <div className="created-tasks">
          Tarefas criadas <span>{createdTasksCount}</span>
        </div>
        <div className="completed-tasks purple">
          Concluídas <span>{completedTasksCount} de {createdTasksCount}</span>
        </div>
      </div>

      <div className="task-list">
        {todos.length === 0 ? (
          <EmptyView />
        ) : (
          todos.map((todo) => (
            <TaskItem
              key={todo.id}
              completed={todo.done}
              text={todo.task || ''}
              onToggle={() => onToggle(todo)}
              onDelete={() => onDelete(todo.id!)}
            />
          ))
        )}
      </div>
    </div>
  );
}
