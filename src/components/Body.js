import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/browser' element={<Browser/>}/>
        </Routes>
        </BrowserRouter>
     
      
    </div>
  )
}

export default Body
