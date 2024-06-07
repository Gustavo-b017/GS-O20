import { Outlet } from 'react-router-dom';
import NavBar from './ComponentesGerais/NavBar';
import './Paginas/CssGeral/Style.css'
import Footer from './ComponentesGerais/Footer';

function App() {

  return (
    <div className='App'>
      <NavBar />
      
      <Outlet/>
      
      <Footer />
    </div>
    
)}

export default App