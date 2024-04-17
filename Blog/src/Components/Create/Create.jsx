import axios from 'axios';
import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from '../../App';




const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState();
    const user = useContext(userContext)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('author', author)
    formData.append('content', content)
    formData.append('image', image)
    formData.append('email', user.email)


    const setContentt = (value) => {
        setContent(value);
    };

   

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/create', formData, { withCredentials: true })
        .then(res=>{
           if(res.data == "Please Login"){
            toast("Please Login first")
            window.location.href = '/Login'
           }
           else if(res.data == "success") {

                    toast("Post created successfully");

                    setTimeout(() => {
                        window.location.href = '/'
                    }, 2000);
           }
        })
           
    }
    return (

        <div >

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <ToastContainer
                    position="bottom-left"
                    autoClose={1000} />
                <h1 className=' text-[35px] font-bold mb-8'>Create Post</h1>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <ReactQuill
                        id="content"
                        value={content}
                        onChange={setContentt}
                        className="border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        id="image"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                        className="mt-1 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full sm:w-auto">
                    Create Post
                </button>
            </form>
        </div>
    )
}

export default Create