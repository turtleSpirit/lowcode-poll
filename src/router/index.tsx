import { createBrowserRouter } from 'react-router-dom';
import * as RouterConfig from './config';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import ManageLayout from '../layouts/ManageLayout';
import List from '../pages/manage/List';
import Star from '../pages/manage/Star';
import Trash from '../pages/manage/Trash';
import QuestionLayout from '../layouts/QuestionLayout';
import Edit from '../pages/question/Edit';
import Stat from '../pages/question/Stat';
// import QuestionDetail from '../pages/question/Detail';
// import ManageQuestion from '../pages/manage/Question';

const routes = [
  {
    path: RouterConfig.HOME_PATHNAME,
    element: <MainLayout />,
    children: [
      {
        path: RouterConfig.HOME_PATHNAME,
        element: <Home />,
      },
      {
        path: RouterConfig.LOGIN_PATHNAME,
        element: <Login />,
      },
      {
        path: RouterConfig.REGISTER_PATHNAME,
        element: <Register />,
      },
      {
        path: RouterConfig.MANAGE_PATHNAME,
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: RouterConfig.NOT_FOUND_PATHNAME,
        element: <NotFound />,
      },
    ],
  },
  {
    path: RouterConfig.QUESTION_PATHNAME,
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
  {
    path: RouterConfig.NOT_FOUND_PATHNAME,
    element: <NotFound />,
  },
];
const router = createBrowserRouter(routes);
export default router;
