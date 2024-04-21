import React from 'react';
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui felis.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul>
                            <li>Technology</li>
                            <li>Travel</li>
                            <li>Food</li>
                            <li>Lifestyle</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
                        <p>Subscribe to our newsletter for latest updates.</p>
                        <form className="mt-4">
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded" />
                            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Subscribe</button>
                        </form>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-[20px]">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-[20px]">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-[20px]">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-600 text-center">
                <p>&copy; 2024 Your Blog. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
