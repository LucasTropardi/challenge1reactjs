import { ClipboardIcon } from "Frontend/components/ClipboardIcon";

export function EmptyView() {
  return (
    <div className="empty-view">
      <div className="empty-view-content">
        <ClipboardIcon />
        <p className="hard">Você ainda não tem tarefas cadastradas</p>
        <p className="soft">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}