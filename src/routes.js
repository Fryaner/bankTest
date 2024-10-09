import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import MainInfo from "./mainBlock/mainInfo";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: '/',
          element: <MainInfo/>
        },
        {
          path: '/transfer',
          element: <div><p>Transfer</p></div>
        },
        {
          path: '/accounts',
          element: <div><p>Accounts</p></div>
        },
        {
          path: '/econpmetrics',
          element: <div><p>Econpmetrics</p></div>
        },
        {
          path: '/creaditCard',
          element: <div><p>CreaditCard</p></div>
        },
        {
          path: '/loan',
          element: <div><p>Loan</p></div>
        },
        {
          path: '/service',
          element: <div><p>Service</p></div>
        },
        {
          path: '/privileges',
          element: <div><p>Privileges</p></div>
        },
        {
          path: '/settings',
          element: <div><p>Settings</p></div>
        },
      ]
    },
  ]);

  export default router;