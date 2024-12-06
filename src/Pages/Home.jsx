// import React, { useState, useEffect } from "react";
// import Slider from "../components/Slider";
// import MovieCard from "../components/MovieCard";
// import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
// import FeaturedMovies from "./FeaturedMovies";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const movies = useLoaderData()

    return (
        <div  >
            {/* Slider Section */}
            {/* <Slider /> */}
            <Slider></Slider>

            {/* Featured Movies Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-6">Featured Movies:{movies.length}</h2>

                <Link to={'movies'} className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    See All Movies
                </Link>
            </section>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    movies.map(movie => <MovieCard movie={movie}></MovieCard>)
                }
            </div>



        </div>
    );
};

export default Home;
