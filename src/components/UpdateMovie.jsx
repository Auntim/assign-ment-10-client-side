import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

function UpdateMovie() {

    const movie = useLoaderData()
    const { poster, title, genre, duration, release, rating, summary, _id } = movie;


    const handleUpdateCoffee = e => {
        e.preventDefault();

        const poster = e.target.poster.value;
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        const release = e.target.release.value;
        const rating = e.target.rating.value;
        const summary = e.target.summary.value;

        const updateMovie = { poster, title, genre, duration, release, rating, summary }
        console.log(updateMovie)

        // send data to the server and database
        fetch(`http://localhost:5000/movie/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Upadted successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }

    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Update Movie! {title}</h1>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="text" name='poster' defaultValue={poster} placeholder="poster url" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' defaultValue={title} placeholder="movie title" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <input type="text" name='genre' defaultValue={genre} placeholder="Genre" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="text" name='duration' defaultValue={duration} placeholder="Duration" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <input type="text" name='release' defaultValue={release} placeholder="Release Year" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <input type="text" name='summary' defaultValue={summary} placeholder="Summary" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl">Upadte movie</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateMovie
