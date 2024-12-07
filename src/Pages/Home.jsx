import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedmovies = useLoaderData();
    const [movies, setMovies] = useState(loadedmovies);




    return (
        <div>

            <div className="mt-20">
                <Slider />
            </div>


            <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Featured Movies</h2>
                <Link
                    to={"movies"}
                    className="mt-6 px-6 py-2 bg-blue-500 text-xl text-white rounded hover:bg-blue-600 dark:bg-blue-700"
                >
                    See All Movies
                </Link>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                            movies={movies}
                            setMovies={setMovies}
                        />
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Home;
