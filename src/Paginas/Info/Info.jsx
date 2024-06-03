import Importancia from './Sections/Importancia.jsx';
import Oceano from './Sections/Oceano.jsx';
import Poluicao from './Sections/Poluicao.jsx';
import { dadosInfo } from './dados/dadosInfo.jsx'
function Info() {
    return (  
        
        <div className="Info">
            
            <div id="carouselExampleCaptions" className="carousel slide">
            
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    
                    {dadosInfo.map((item) => ( 
                        <div className="carousel-item active" key={item.id}>

                            <img src={item.icon}  alt="" />
                            
                            <div className="carousel-caption d-none d-md-block">
                                <h5> {item.title} </h5>
                                <p> {item.text} </p>
                            </div>
                        
                        </div>
                    ))}                    
                    
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
            </div>

            <Oceano />

            <Importancia />

            <Poluicao />
        </div>
    );
}

export default Info;