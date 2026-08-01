import { Routes, Route } from 'react-router-dom'
import Layout from '../src/pages/layout/layout' // Importe o layout criado
import Home from './pages/home/home'
import About from './pages/about/about'
import Projects from './pages/projetos/projetos'
import Locatios from './pages/locations/locations'
import Galeria from './pages/galeria/galeria'
import Contatos from './pages/contatos/contatos'
import Doacoes from './pages/doacoes/doacoes'
import Parceiros from './pages/parceiros/parceiros'
import './App.css'

function App() {
    return (
        <Routes>
            {/* Rota pai que carrega o layout estrutural */}
            <Route element={<Layout />}>
                {/* Rotas filhas que serão renderizadas dentro do <Outlet /> */}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projetos' element={<Projects />} />
                <Route path='/atuacao' element={<Locatios />} />
                <Route path='/galeria' element={<Galeria />} />
                <Route path='/contatos' element={<Contatos />} />
                <Route path='/doacoes' element={<Doacoes />} />
                <Route path='/parceiros' element={<Parceiros />} />
            </Route>
        </Routes>
    )
}

export default App
