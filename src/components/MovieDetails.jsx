import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://assignment-10-server-side-bice.vercel.app/movie/${id}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the movie!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-side-bice.vercel.app/movie/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "The movie has been deleted.", "success");
                            navigate('/movies');
                        }
                    })
                    .catch((err) => console.error(err));
            }
        });
    };

    const handleAddToFavorites = () => {
        fetch(`https://assignment-10-server-side-bice.vercel.app/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire("Added!", "The movie has been added to your favorites.", "success");
            })
            .catch((err) => console.error(err));
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    const { poster, title, genre, duration, release, rating, summary } = movie;

    return (
        <div className="container mx-auto p-6">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className=''>
                    <img src={poster} alt={title} className="w-full h-auto object-cover rounded-lg" />
                </figure>
                <div className="p-6 space-y-4">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p><strong>Genre:</strong> {genre}</p>
                    <p><strong>Release Date:</strong> {release}</p>
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                    <p><strong>Summary:</strong> {summary}</p>
                    <div className="mt-4 flex space-x-4">
                        <button
                            onClick={handleDelete}
                            className="btn btn-error text-white"
                        >
                            Delete Movie
                        </button>
                        <button
                            onClick={handleAddToFavorites}
                            className="btn btn-primary text-white"
                        >
                            Add to Favorite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
