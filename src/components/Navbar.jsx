import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Custom hook to get user data
import { FaUserCircle } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
    const { user, logout } = useAuth(); // Assuming `useAuth` provides user and logout function
    const { theme, toggleTheme } = useTheme;

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo/Website Name */}
                <Link to="/" className="text-2xl font-bold text-red-400">
                    NETFLIX
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-500" : "hover:text-yellow-500"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-500" : "hover:text-yellow-500"
                            }
                        >
                            All Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-movie"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-500" : "hover:text-yellow-500"
                            }
                        >
                            Add Movie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/updatemovie"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-500" : "hover:text-yellow-500"
                            }
                        >
                            UpdateMovie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-500" : "hover:text-yellow-500"
                            }
                        >
                            My Favorites
                        </NavLink>
                    </li>


                </ul>

                {/* User Authentication */}
                <div className="flex items-center space-x-4">
                    {!user ? (
                        <>
                            <Link to="/login" className="hover:text-yellow-500">
                                Login
                            </Link>
                            <Link to="/register" className="hover:text-yellow-500">
                                Register
                            </Link>
                            <button
                                onClick={toggleTheme}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </>
                    ) : (
                        <div className="relative group">
                            <img
                                src={user.photoURL || <FaUserCircle className="text-3xl" />}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-yellow-500 cursor-pointer"
                            />
                            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg p-4 top-12 right-0">
                                <p className="font-semibold">{user.displayName || "User"}</p>
                                <button
                                    onClick={logout}
                                    className="text-red-500 hover:underline mt-2"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Add a hamburger menu for mobile responsiveness */}
            </div>
        </nav>
    );
};

export default Navbar;
