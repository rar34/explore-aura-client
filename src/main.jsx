import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/UserInfo/Login.jsx';
import AllTouristsSpot from './components/Tourists/AllTouristsSpot.jsx';
import AddTouristsSpot from './components/Tourists/AddTouristsSpot.jsx';
import MyList from './components/Tourists/MyList.jsx';
import Register from './components/UserInfo/Register.jsx';
import FirebaseProvider from './components/FirebaseProvider/FirebaseProvider.jsx';
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot />
      },
      {
        path: "/add-tourists-spot",
        element: <PrivateRoutes><AddTouristsSpot /></PrivateRoutes>
      },
      {
        path: "/my-list",
        element: <PrivateRoutes><MyList /></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
