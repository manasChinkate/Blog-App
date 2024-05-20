import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const [show, setShow] = useState(!isOpen);

    return (
        <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-[#000000b3] flex items-center justify-center ">

            <div className=' bg-white p-8 rounded-md w-[300px] sm:w-[400px] md:w-[500px]'>
            <AiOutlineClose  className=' absolute top-0 right-0 m-8 text-3xl cursor-pointer ' onClick={onClose} />

            <div className='p-3 text-black text-[36px] font-bold rounded-md flex items-center justify-center mb-3'>Contact Us</div>

                <form action="">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className=" text-black text-sm w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className=" text-black text-sm w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="text-sm text-black w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className=" text-sm w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

            </div>



        </div>
    );
};

export default Modal;
