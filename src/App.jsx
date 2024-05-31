import { Outlet } from 'react-router-dom';
import NavBar from './ComponentesGerais/NavBar';
import './Paginas/CssGeral/Style.css'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Outlet/>
    </div>
    
)}

export default App