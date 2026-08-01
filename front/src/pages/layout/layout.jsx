import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar/navbar'// Importe seu Navbar e Footer aqui. Exemplo:
import Footer from '../../components/footer/footer'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

function Layout() {
  return (
    <div id="root">
      {/* O Navbar fica fixo no topo */}
      <NavBar /> 

      {/* O Main recebe o conteúdo dinâmico das páginas e empurra o footer */}
      <main>
        <Outlet /> 
      </main>

      {/* O Footer fica fixo na base */}
      <Footer />
    </div>
  )
}

export default Layout
