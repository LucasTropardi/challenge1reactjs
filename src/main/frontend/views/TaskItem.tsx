import { Trash } from "@phosphor-icons/react";

interface TaskItemProps {
  completed: boolean;
  text: string;
  checkStyle?: string;
  onToggle: () => void;
  onDelete: () => void;
}

export function TaskItem({ completed, text, onToggle, onDelete, checkStyle }: TaskItemProps) {
  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} className={checkStyle} />
      <p>{text}</p>
      <button className="delete-button" onClick={onDelete} disabled={completed}>
        <Trash size={18} className="trash-icon" />
      </button>
    </div>
  );
}
