import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Feed from '../Components/Feed/Feed';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed></Feed>,
      },
   
    ],
  },
]);

export default routes;
