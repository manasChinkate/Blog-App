import React, { createContext, useEffect, useState } from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Create from './Components/Create/Create'
import Register from './Components/Register/Register'
import axios from 'axios'
import Each from './Components/Each/Each'
import EditPost from './Components/EditPost/EditPost'

export const userContext = createContext()

const App = () => {

  const [user, setuser] = useState({})
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(user=> 
      setuser(user.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <>
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Create' element={<Create />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Post/:id' element={<Each />}></Route>
          <Route path='/Editpost/:id' element={<EditPost />}></Route>
          
        </Routes>

      </BrowserRouter>
      </userContext.Provider>
    


    </>

  )
}

export default App