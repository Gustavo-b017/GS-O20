import { Link } from "react-router-dom";


function NavBar() {

    return (
    <div className="">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <Link to='/' className="navbar-brand" href="#">Home</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='AMOC' className="nav-link" href="#">AMOC</Link>
                        <Link to='Info' className="nav-link" href="#">Informação</Link>
                        <Link to='Contato' className="nav-link ">Contato</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    
    
    
    );
}

export default NavBar;