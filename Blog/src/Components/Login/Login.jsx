import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()



    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true })
            .then(res => {
                if (res.data == "success") {

                    toast("Login Successful");

                    setTimeout(() => {
                        window.location.href = '/'
                    }, 2000);
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="flex justify-center  h-screen">

            <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-[60px] " >
                <ToastContainer
                    position="bottom-left"
                    autoClose={1000} />
                <div className="mb-4">
                    <h2 className=' text-center text-2xl mb-3'>Login </h2>

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={e => setemail(e.target.value)}

                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                        onChange={e => setpassword(e.target.value)}

                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-24 ml-[50px] "
                        type="submit"
                        onClick={HandleSubmit}
                    >
                        Login
                    </button>
                </div>
                <div className="text-gray-700 flex gap-2 flex-col items-center mt-6">
                    <p>Don't have an account?</p>
                    <Link to={'/Register'}><a href="#" className="text-blue-500 hover:underline">Sign up</a></Link>
                </div>
            </form>

        </div>
    )
}

export default Login