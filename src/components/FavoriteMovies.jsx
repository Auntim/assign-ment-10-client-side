import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

function FavoriteMovies() {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/favorites?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setFavorites(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching favorites:', error);
                setLoading(false);
            });
    }, [user?.email]);

    const handleDeleteFavorite = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This movie will be removed from your favorites!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/favorites/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire('Deleted!', 'Your favorite movie has been removed.', 'success');
                            setFavorites(favorites.filter((movie) => movie._id !== id));
                        }
                    });
            }
        });
    };

    if (loading) return <div>Loading...</div>;

    if (favorites.length === 0) {
        return <div>No favorite movies added yet!</div>;
    }

    return (
        <div className="favorite-movies-page p-4">
            <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((movie) => (
                    <div key={movie._id} className="card shadow-md p-4 bg-white rounded-lg">
                        <img
                            src={movie.movie.poster}
                            alt={movie.movie.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold">{movie.movie.title}</h2>
                        <p>{movie.movie.genre}</p>
                        <p>{movie.movie.duration}</p>
                        <p>{movie.movie.release}</p>
                        <p>Rating: {movie.movie.rating}</p>
                        <button
                            onClick={() => handleDeleteFavorite(movie._id)}
                            className="btn bg-red-500 text-white mt-4 w-full"
                        >
                            Delete Favorite
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoriteMovies;
