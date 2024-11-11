import { PlusCircle } from "@phosphor-icons/react";

export function NewTodoBar() {
  return (
    <div className="task-input">
      <div className="task-input-content">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar<PlusCircle size={18} /></button>
      </div>
    </div>
  );
}