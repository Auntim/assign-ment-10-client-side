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
import AuthProviders from './providers/AuthProviders.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import { FaV } from 'react-icons/fa6';
// import FavoriteMovies from './components/FavoriteMovies.jsx';
import Erropage from './components/Erropage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-side-bice.vercel.app/movie')
      },
      {
        path: 'movies',
        element: <AllMovies></AllMovies>,
        loader: () => fetch('https://assignment-10-server-side-bice.vercel.app/movie')
      },
      {
        path: 'add-movie',
        element: <AddMovies></AddMovies>
      },
      {
        path: 'updatemovie/:id',
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-bice.vercel.app/movie/${params.id}`)
      },
      {
        path: '/favorites',
        element: <Favourite></Favourite>
      },
      // {
      //   path: '/favorites',
      //   element: <FavoriteMovies></FavoriteMovies>
      // },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Registrar></Registrar>
      },
      {
        path: '/movie/:id',
        element: <PrivateRoute>
          <MovieDetails></MovieDetails>
        </PrivateRoute>
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </HelmetProvider>
  </StrictMode>,
)
