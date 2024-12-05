import React from "react";

const MovieCard = ({ movie }) => {
    const { poster, title, genre, duration, releaseYear, rating } = movie;

    return (
        <div className="bg-white shadow-md rounded overflow-hidden">
            <img src={poster} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{genre.join(", ")}</p>
                <p className="text-sm text-gray-600">{duration} mins | {releaseYear}</p>
                <p className="text-sm text-yellow-500 font-semibold">Rating: {rating}/5</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
