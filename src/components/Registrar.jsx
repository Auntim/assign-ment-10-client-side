import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Link } from 'react-router-dom'

function Registrar() {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const newUser = { name, photo, email }
                fetch('https://assignment-10-server-side-bice.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error)
            });


    }
    return (
        <div className='flex card justify-center items-center min-h-screen bg-gray-100'>
            <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <h2 className='text-xl font-semibold'>Register</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <p href="#" className="label-text-alt text-xl link link-hover">Forgot password? <span><Link to="/login" className="text-blue-500 hover:underline">Login</Link></span></p>
                        </label>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registrar
