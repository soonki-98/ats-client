import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/home';
import Resume from '@/pages/resume';
import Resumes from '@/pages/resumes';
import { GlobalStyle } from '@/styles/globalStyle';
import withPageLayout from '@/widgets/layouts';
import { PagePath } from '@/shared/constant/path';

import reportWebVitals from './reportWebVitals';
import ModalProvider from './shared/ui/modal/ModalProvider';

const router = createBrowserRouter([
  {
    path: PagePath.HOME,
    element: withPageLayout(Home),
  },
  {
    path: PagePath.RESUME_LIST,
    element: withPageLayout(Resumes),
  },
  {
    path: PagePath.RESUME,
    element: withPageLayout(Resume),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
