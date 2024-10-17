import React from 'react';
import { createRoot } from "react-dom/client";
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home.js";
import Error from "./pages/Error/Error";
import Logements from "./pages/logements/Logements";
import './App.css';
import logo from './logo.svg'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home ok="ok" />,
  },
  {
    path: "/apropos",
    element: <Apropos />
  },
  {
    path: "/logements/:id",
    element: <Logements />
  },
  {
    path: "*",
    element: <Error />
  },
]);





createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
