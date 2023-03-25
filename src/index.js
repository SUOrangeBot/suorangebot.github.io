import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  createHashRouter,
} from "react-router-dom";

import Team from './team/Team';
import RobotDetail from './robots/RobotDetail';
import RobotGrid from './robots/RobotGrid';
import Apply from './Apply';
import Home from './Home';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Team",
        element: <Team />,
      },
      {
        path: "Robots/:id",
        element: <RobotDetail />,

      },
      {
        path: "Robots",
        element: <RobotGrid />,
      },
      {
        path: "Apply",
        element: <Apply />,
      },
    ]
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
