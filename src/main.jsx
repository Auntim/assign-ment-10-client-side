import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Root from './components/Root/Root.jsx';
import AllMovies from './components/AllMovies.jsx';
import AddMovies from './components/AddMovies.jsx';
import UpdateMovie from './components/UpdateMovie.jsx';
import Favourite from './components/Favourite.jsx';
import Login from './components/Login.jsx';
import Registrar from './components/Registrar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/movie')
      },
      {
        path: 'movies',
        element: <AllMovies></AllMovies>
      },
      {
        path: 'add-movie',
        element: <AddMovies></AddMovies>
      },
      {
        path: 'updatemovie/:id',
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) => fetch(`http://localhost:5000/movie/${params.id}`)
      },
      {
        path: 'favorites',
        element: <Favourite></Favourite>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Registrar></Registrar>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
