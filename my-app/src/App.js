import React from "react"
import Header from "./components/Header/Header"
import Copyright from "./components/Copyright/Copyright"
import "./App.css"
import { Container } from "@mui/system"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Rules from "./pages/Rules/Rules"
import { Routes, Route } from "react-router-dom"
import Project from "./pages/Project/Project"

function App () {
  return (
    <div>
       <Header className="header" />
       <Container sx={{ mt: "1rem" }}>
      <Routes>
        {/* <Route path='' element={<Home />} /> */}
        <Route path='/home' element={<Home />} />
        <Route path='/rules' element={<Rules/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path='/' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      </Container>
      <Copyright />
</div>
  )
}

export default App
