import './root.css'
import React ,{useState,useEffect} from "react"
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import Test from "./pages/test.jsx"

function App() {

  return (<>
  
  <div className="w-full h-screen bg-zinc-100 dark:bg-primaryDark overflow-x-hidden scrollbar-thin scrollbar-thumb-emerald-900 scrollbar-track-primaryDark ">
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
  
   </div>
   </>
  )
}

export default App

