import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import Auth from './components/Auth/Auth.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'))