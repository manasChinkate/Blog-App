import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../../App'




const Each = () => {
    const navigate = useNavigate()
    const user = useContext(userContext)

    const { id } = useParams(); // Make sure useParams is imported from 'react-router-dom'
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/getpostbyid/${id}`)
            .then(result => setPost(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleClick = (id) => {
        axios.delete(`http://localhost:3001/deletepost/${id}`)
            .then(result => {
                if (result.data === "success") {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="pt-8 md:pt-16 container bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl max-w-screen-xl mx-auto mb-8">
            <img
                className="h-48 sm:h-64 md:h-96 w-full object-cover sm:object-contain"
                src={`http://localhost:3001/Images/${post.file}`}
                alt="Blog Image"
            />
            <div className="p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 text-sm italic">Author: {post.author}</p>
                <p className="text-gray-600 text-sm">
                    Published on: {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                {user.email === post.email ?

                <>
                <div className="flex gap-3 mt-4">
                <Link to={`/Editpost/${post._id}`}>
                    <a href="#" className="text-blue-500 font-semibold hover:text-blue-700 block">
                        Update
                    </a>
                </Link>
                <button
                    className="text-blue-500 font-semibold hover:text-blue-700 block border-none"
                    onClick={() => handleClick(post._id)}
                >
                    Delete
                </button>
            </div>
            </>
                    
                 : <></>}
            </div>
        </div>

    )
}

export default Each