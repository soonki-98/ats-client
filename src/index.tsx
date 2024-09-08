import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/home';
import Resume from '@/pages/resume';
import { GlobalStyle } from '@/styles/globalStyle';
import withPageLayout from '@/widgets/layouts';

import reportWebVitals from './reportWebVitals';
import { PagePath } from './shared/constant/path';

const router = createBrowserRouter([
  {
    path: PagePath.HOME,
    element: withPageLayout(Home),
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
