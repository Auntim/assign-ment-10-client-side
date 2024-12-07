import React from 'react'
import Swal from 'sweetalert2';

function AddMovies() {

    const handleAddCoffee = e => {
        e.preventDefault();

        const poster = e.target.poster.value;
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        const release = e.target.release.value;
        const rating = e.target.rating.value;
        const summary = e.target.summary.value;

        const newMovie = { poster, title, genre, duration, release, rating, summary }
        console.log(newMovie)

        // send data to the server and database
        fetch('https://assignment-10-server-side-bice.vercel.app/movie', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie added successfully',
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
                <h1 className="text-5xl font-bold">Add Movie!</h1>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="text" name='poster' placeholder="poster url" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' placeholder="movie title" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <input type="text" name='genre' placeholder="Genre" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="text" name='duration' placeholder="Duration" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <input type="text" name='release' placeholder="Release Year" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <input type="text" name='summary' placeholder="Summary" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add movie</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovies
