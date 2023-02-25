import { useState } from "react"
import Cart from "./components/Cart"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App() {
  const [page,setPage]=useState('home')
  return (
   <>
      <Navbar setPage={setPage}/> 
      {
        page=="home"? <Main/>:<Cart/>
      }
   </>
  )
}

export default App
