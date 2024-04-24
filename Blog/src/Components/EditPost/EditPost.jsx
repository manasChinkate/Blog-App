import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
   
    const {id} = useParams()

    const setContentt = (value) => {
        setContent(value);
    };

   

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put('https://blog-backend-n7o2.onrender.com/editpost/' +id, {title,content}, { withCredentials: true })
        .then(res=>{
           if(res.data == "Please Login"){
            toast("Please Login first")
            window.location.href = '/Login'
           }
           else if(res.data == "success") {

                    toast("Post Edited successfully");

                    setTimeout(() => {
                        window.location.href = '/'
                    }, 2000);
           }
        })
           
    }
    useEffect(()=>{
        axios.get('https://blog-backend-n7o2.onrender.com/getpostbyid/'+id)
        .then(result=>{
            setTitle(result.data.title)
            setContent(result.data.content)
        })
        .catch(err=>console.log(err))
    },[])
    return (

        <div >

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <ToastContainer
                    position="bottom-left"
                    autoClose={1000} />
                <h1 className=' text-[35px] font-bold mb-8'>Edit Post</h1>
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
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <ReactQuill
                        id="content"
                        value={content}
                        onChange={setContentt}
                        className="border border-gray-300 rounded-md"
                        required
                    />
                </div>
            
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full sm:w-auto">
                    Create Post
                </button>
            </form>
        </div>
    )
}

export default EditPost