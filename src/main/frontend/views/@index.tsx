import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Button, Notification, TextField } from '@vaadin/react-components';
import { HelloWorldService } from 'Frontend/generated/endpoints.js';
import { HeaderView } from './HeaderView';
import { NewTodoBar } from './NewTodoBar';

export const config: ViewConfig = {
  menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
  title: 'Hello Hilla',
};

export default function TodoView() {
  const name = useSignal('');

  return (
    <>
      <HeaderView />
      <NewTodoBar />
    </>
  );
}
