import React, { useEffect, useState } from 'react';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the user's favorites from the backend
    useEffect(() => {
        const email = 'user@example.com';
        fetch(`http://localhost:5000/favorites?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                setFavorites(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching favorites:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (favorites.length === 0) {
        return <div>No favorites found!</div>;
    }

    return (
        <div className="favorites-page p-4">
            <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((movie) => (
                    <div
                        key={movie._id}
                        className="card shadow-md p-4 bg-white rounded-lg"
                    >
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <p>Rating: {movie.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
