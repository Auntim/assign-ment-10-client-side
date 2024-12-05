import React, { useState, useEffect } from "react";
// import Slider from "../components/Slider";
import MovieCard from "../components/MovieCard";
// import axios from "axios";
import Slider from "../components/Slider";
import FeaturedMovies from "./FeaturedMovies";

const Home = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("/api/movies"); // Replace with your API endpoint
                const data = await response.json();
                setFeaturedMovies(data); // Ensure data is an array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);


    return (
        <div>
            {/* Slider Section */}
            {/* <Slider /> */}
            <Slider></Slider>

            {/* Featured Movies Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {featuredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    See All Movies
                </button>
            </section>

            {/* Additional Sections */}
            <section className="bg-gray-100 py-12">
                {/* Replace with meaningful content */}
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Upcoming Movies</h2>
                    <p className="text-gray-700">Stay tuned for exciting upcoming releases!</p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Trending Genres</h2>
                    <p className="text-gray-700">Explore the genres everyone is talking about!</p>
                </div>
            </section>

        </div>
    );
};

export default Home;
