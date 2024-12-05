import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; 2024 Movie Portal. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="hover:text-yellow-500">Facebook</a>
                    <a href="#" className="hover:text-yellow-500">Twitter</a>
                    <a href="#" className="hover:text-yellow-500">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
