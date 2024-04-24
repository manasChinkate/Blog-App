import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import Select from 'react-select';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        axios.get('https://blog-backend-n7o2.onrender.com/getposts')
            .then(response => {
                const posts = response.data;
                setPosts(posts);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSort = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (selectedOption.value === 'asc') {
            const sortedPosts = [...posts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setPosts(sortedPosts);
        } else {
            const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedPosts);
        }
    };

    const options = [
        { value: 'asc', label: 'Oldest first' },
        { value: 'desc', label: 'Latest first' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='min-h-screen pt-16 bg-white flex flex-col items-center justify-center gap-8 pb-9'>
            <Select
                value={selectedOption}
                onChange={handleSort}
                options={options}
                placeholder="Sort by Date"
            />
            {posts.map(postt => (
                <Link to={`/Post/${postt._id}`} key={postt._id}>
                    <div className='w-full max-w-sm md:max-w-lg max-[390px]:max-w-xs'>
                        <div className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl'>
                            <img className='cursor-pointer w-full h-56 max-[390px]:object-contain sm:h-64 object-cover sm:object-contain' src={`http://localhost:3001/Images/${postt.file}`} alt="Blog Image" />
                            <div className='p-4 sm:p-6'>
                                <h2 className='text-xl sm:text-3xl font-semibold'>{postt.title}</h2>
                                <div className='flex items-center gap-4 mt-2'>
                                    <p className='text-gray-600 text-xs sm:text-sm italic flex items-center gap-2'><FaUser className='text-sky-500 text-[15px]' /> {postt.author}</p>
                                    <p className='text-gray-600 text-xs sm:text-sm flex items-center gap-2'><BsCalendarDate className='text-sky-500 text-[20px]' /> {new Date(postt.createdAt).toLocaleDateString()}</p>
                                </div>
                                <p className='max-h-[200px] mt-4 text-gray-600 overflow-hidden' dangerouslySetInnerHTML={{ __html: postt.content }}></p>
                                <a href="#" className='text-blue-500 font-semibold hover:text-blue-700 block mt-4'>Read More</a>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back to Top
            </button>
        </div>
    );
}

export default Home;
