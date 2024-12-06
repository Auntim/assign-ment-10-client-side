import React from 'react'
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



function MovieCard({ movie, movies, setMovies }) {

    const { poster, title, genre, duration, release, rating, summary, _id } = movie;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/movie/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = movies.filter(mov => mov._id !== _id)
                            setMovies(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="card  bg-base-100 shadow-xl m-20 p-6">
            <figure className='h-52  '>
                <img className='w-full rounded-lg object-cover'
                    src={poster}
                    alt="Movie" />
            </figure>
            <div className="flex w-full justify-between p-5">
                <div className='space-y-4'>
                    <h2 className="card-title font-semibold">Title:{title}</h2>
                    <p className='font-semibold'>{genre}</p>
                    <p className='font-semibold'>{release}</p>
                    <p className='font-semibold'>{duration}</p>
                    <p className='font-semibold'>Ratings: {rating}</p>
                </div>

                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical flex flex-col space-y-5">
                        <Link to={`updatemovie/${_id}`}>
                            <button className="btn text-2xl p-2 bg-blue-200 rounded-full text-center items-center"><FaPen></FaPen></button>
                        </Link>
                        <Link>
                            <button onClick={() => handleDelete(_id)} className="text-2xl p-2 bg-blue-200 rounded-full text-center items-center btn"><MdDelete></MdDelete></button>
                        </Link>
                        <Link to={`/movie/${_id}`}>
                            <button className="text-2xl p-2 bg-blue-200 rounded-full text-center items-center btn">
                                <FaRegEye />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
