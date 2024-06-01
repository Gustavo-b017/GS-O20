import { impoImpo } from '../../Dados/Importancia/impo.jsx'

function Importancia() {
    return (  
        <div className="Importancia">
            
            <h1>Importancia</h1>

            <div className='dadosImpo'>
                {impoImpo.map((item) => (
                    <div key={item.id}>
                        <p>{item.text}</p>
                        <img src={item.icon} alt="icon" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Importancia;