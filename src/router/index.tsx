import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
// import QuestionLayout from '../layouts/QuestionLayout';
// import ManageLayout from '../layouts/ManageLayout';

// import QuestionList from '../pages/question/List';
// import QuestionDetail from '../pages/question/Detail';
// import ManageQuestion from '../pages/manage/Question';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
