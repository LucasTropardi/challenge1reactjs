import { signal } from '@vaadin/hilla-react-signals';
import { AppLayout } from '@vaadin/react-components';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const documentTitleSignal = signal('');

export default function MainLayout() {
  const currentTitle = "Meus afazeres";

  useEffect(() => {
    if (currentTitle) {
      documentTitleSignal.value = currentTitle;
    }
  }, [currentTitle]);

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
