import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [post, setpost] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getposts')
            .then(response => {

                const posts = response.data;
                setpost(posts)
                console.log(posts);
            })
            .catch(err => console.log(err));
    }, []);



    return (

        <div className='min-h-screen pt-16 bg-white flex flex-col items-center justify-center gap-8'>
            {post.map(postt => (
                <Link to={`/Post/${postt._id}`} key={postt._id}>
                    <div className='w-full max-w-sm md:max-w-lg'>
                        <div className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl'>
                            <img className='cursor-pointer w-full h-56 sm:h-64 object-cover sm:object-contain' src={`http://localhost:3001/Images/${postt.file}`} alt="Blog Image" />
                            <div className='p-4 sm:p-6'>
                                <h2 className='text-xl sm:text-3xl font-semibold'>{postt.title}</h2>
                                <p className='text-gray-600 text-xs sm:text-sm italic'>Author: {postt.author}</p>
                                <p className='text-gray-600 text-xs sm:text-sm'>Published on {new Date(postt.createdAt).toLocaleDateString()}</p>
                                <p className='mt-4 text-gray-600 h-24 sm:h-auto overflow-hidden shadow-inset-white bg-white' dangerouslySetInnerHTML={{ __html: postt.content }}></p>
                                <a href="#" className='text-blue-500 font-semibold hover:text-blue-700 block mt-4'>Read More</a>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>


    )
}

export default Home