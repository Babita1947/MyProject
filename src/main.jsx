import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Bgchanger from './pages/Bgchanger';
import Counter from './pages/Counter.jsx';
import Ecommerce from './pages/Ecommerce.jsx';
import Passwordgenerator from './pages/Passwordgenerator.jsx';
import { NotFound } from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "bgChanger",
    element: <Bgchanger/>
  },
  {
    path: "counter",
    element: <Counter/>
  },
  {
    path: "ecommerce",
    element: <Ecommerce/>
  },
  {
    path: "passwordgenerator",
    element: <Passwordgenerator/>
  },
  {
    path: "*",
    element: <NotFound/>
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

