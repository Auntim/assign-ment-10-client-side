import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedmovies = useLoaderData();
    const [movies, setMovies] = useState(loadedmovies);

    // Theme State
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Toggle Theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save to localStorage
    };

    // Apply Theme to Body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <header className="flex justify-center items-center px-4 py-4 bg-gray-200 dark:bg-gray-800">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700"
                >
                    {theme === "light" ? "Dark" : "Light"} Mode
                </button>
            </header>

            <Slider />

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
