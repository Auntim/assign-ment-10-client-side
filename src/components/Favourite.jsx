
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



function Favourite() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-side-bice.vercel.app/favorites')
            .then((res) => res.json())
            .then((data) => setFavorites(data))
            .catch((err) => console.error(err));
    }, []);

    const handleRemoveFavorite = (id) => {
        console.log(id)
        fetch(`https://assignment-10-server-side-bice.vercel.app/favorites/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setFavorites(favorites.filter((movie) => movie._id !== id));
                    alert('Movie removed from favorites.');
                }
            })
            .catch((err) => console.error('Error removing favorite:', err));
    };

    return (

        <div className="container mx-auto p-6">
            <Helmet>
                <title>NETFLIX | Favourites</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-6">Favorite Movies</h1>
            {favorites.length === 0 ? (
                <p>You have no favorite movies yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((movie) => (
                        <div key={movie._id} className="card bg-base-100 shadow-xl p-4">
                            <figure>
                                <img src={movie.poster} alt={movie.title} className="rounded-lg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{movie.title}</h2>
                                <p><strong>Genre:</strong> {movie.genre}</p>
                                <p><strong>Rating:</strong> {movie.rating}</p>
                                <div className="card-actions mt-4">
                                    <button
                                        onClick={() => handleRemoveFavorite(movie._id)}
                                        className="btn bg-gray-900 text-white"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favourite;

