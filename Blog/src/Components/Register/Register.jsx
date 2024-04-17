import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

    const [username, setusername] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const navigate = useNavigate()

  const HandleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {username,email,password},{withCredentials:true})
        .then(res=> {
            navigate('/Login')
        })
        .catch(err=>console.log(err))
        
        
  }

    
    return (
        <div className="flex justify-center h-screen ">

            <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-[60px] " >
                <div className="mb-4">
                    <h2 className=' text-center text-2xl mb-3'>Sign Up  </h2>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={e=> setusername(e.target.value)}
                        required

                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={e=> setemail(e.target.value)}
                        required

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
                        onChange={e=> setpassword(e.target.value)}
                        required

                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-24 ml-[50px] "
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div className="text-gray-700 flex gap-2 flex-col items-center mt-6">
                    <p>Already have an account?</p>
                    <Link to={'/Login'}> <a href="#" className="text-blue-500 hover:underline">Login Here</a></Link>
                   
                </div>
            </form>

        </div>
    )
}

export default Register