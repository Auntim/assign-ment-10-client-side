import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Helmet } from 'react-helmet-async';


function AllMovies() {
    const loadedMovies = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = loadedMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>NETFLIX | All Movies</title>
            </Helmet>
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-5xl text-center font-bold mb-6">All Kinds of Movies are here!!!</h2>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search movies by title..."
                        className="input input-bordered w-full max-w-md mx-auto block"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </section>


            <div className="grid md:grid-cols-3 gap-4">
                {filteredMovies.map(movie => (
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                    />
                ))}
            </div>


            {filteredMovies.length === 0 && (
                <p className="text-center text-gray-500 mt-6">No movies found matching your search.</p>
            )}
        </div>
    );
}

export default AllMovies;
