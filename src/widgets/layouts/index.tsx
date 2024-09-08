import { ComponentType } from 'react';
import Gnb from '../gnb/ui';
import Sidebar from '../sidebar/ui';

export default function withPageLayout(Component: ComponentType) {
  return (
    <>
      <Gnb />
      <div className="App">
        <Sidebar />
        <Component />
      </div>
    </>
  );
}
