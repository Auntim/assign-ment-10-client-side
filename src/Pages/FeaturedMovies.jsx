// FeaturedMovies.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovies = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        // Fetch the movies from the database (MongoDB or API)
        fetch('/api/movies') // Adjust the endpoint if needed
            .then(response => response.json())
            .then(data => {
                // Sort movies based on rating and pick top 6
                const sortedMovies = data.sort((a, b) => b.rating - a.rating);
                setFeaturedMovies(sortedMovies.slice(0, 6));
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <section className="featured-movies py-10">
            <h2 className="text-3xl font-bold mb-4">Featured Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredMovies.map(movie => (
                    <div key={movie.id} className="movie-card bg-gray-800 text-white p-4 rounded-lg">
                        <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                        <p className="text-sm">{movie.genre.join(', ')}</p>
                        <p className="text-sm">Duration: {movie.duration} min</p>
                        <p className="text-sm">Release Year: {movie.releaseYear}</p>
                        <p className="text-sm">Rating: {movie.rating}</p>
                        <Link to={`/movies/${movie.id}`} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg">See Details</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedMovies;
