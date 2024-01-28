import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from './components/Contact/Contact.jsx';
import CardContainer from './components/Layout/CardContainer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <CardContainer/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
