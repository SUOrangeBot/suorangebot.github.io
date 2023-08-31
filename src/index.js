import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  createHashRouter,
} from "react-router-dom";

import Team from './pages/team/Team';
import RobotDetail from './pages/robots/RobotDetail';
import RobotGrid from './pages/robots/RobotGrid';
import Apply from './pages/Apply';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

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
      {
        path: "AboutUs",
        element: <AboutUs />,
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
