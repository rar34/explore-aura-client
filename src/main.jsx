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
import ViewDetails from './components/Tourists/ViewDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import UpdatePlace from './components/Tourists/UpdatePlace.jsx';
import CountryDetails from './components/Home/CountryDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristPlace")
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
        element: <AllTouristsSpot />,
        loader: () => fetch("http://localhost:5000/touristPlace")
      },
      {
        path: "/add-tourists-spot",
        element: <PrivateRoutes><AddTouristsSpot /></PrivateRoutes>
      },
      {
        path: "/my-list",
        element: <PrivateRoutes><MyList /></PrivateRoutes>
      },
      {
        path: "/view-details/:id",
        element: <PrivateRoutes><ViewDetails /></PrivateRoutes>,
        loader: () => fetch("http://localhost:5000/touristPlace")
      },
      {
        path: "/updatePlace/:id",
        element: <UpdatePlace />,
        loader: ({ params }) => fetch(`http://localhost:5000/touristPlaces/${params.id}`)
      },
      {
        path: "/countryDetails/:country_name",
        element: <CountryDetails />,
        loader: () => fetch("http://localhost:5000/touristPlace")
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
