import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

interface NewTodoBarProps {
  onAdd: (task: string) => void;
}

export function NewTodoBar({ onAdd }: NewTodoBarProps) {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      onAdd(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="task-input">
      <div className="task-input-content">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAdd} disabled={!newTask.trim()}>
          Criar <PlusCircle size={18} />
        </button>
      </div>
    </div>
  );
}
