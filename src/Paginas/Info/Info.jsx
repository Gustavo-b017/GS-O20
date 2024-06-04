import Carrosel from './Sections/Carosel.jsx';
import Importancia from './Sections/Importancia.jsx';
import Oceano from './Sections/Oceano.jsx';
import Poluicao from './Sections/Poluicao.jsx';
import Videos from './Sections/Videos.jsx';

function Info() {
    return (  
        
        <div className="Info">
            
            <Carrosel />

            <Oceano />

            <Importancia />

            <Poluicao />

            <Videos />
        </div>
    );
}

export default Info;