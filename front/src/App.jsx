import { useState } from 'react'
import AppRoutes from "./routes/AppRoutes"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Projects from './pages/projetos/projetos'

function App() {

    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projetos' element={<Projects />} />

        </Routes>
    )
}

export default App
