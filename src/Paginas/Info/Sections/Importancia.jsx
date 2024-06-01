import { useEffect } from 'react'
// import { impoImpo } from '../../Dados/Importancia/impo.jsx'
import { useState } from 'react'

function Importancia() {

    const [icones, setIcones] = useState([])

    useEffect(() => {
        fetch(`https://665b786f3e4ac90a04d74e7a.mockapi.io/Informacoes`)
        .then(response => response.json())
        .then(data => {
            setIcones(data)
            console.log(data)
        })
    }, [])

    return (  
        <div className="Importancia">
            
            <h1>Importancia</h1>
{/* 
            <div className='dadosImpo'>
                {impoImpo.map((item) => (
                    <div key={item.id}>
                        <p>{item.text}</p>
                        <img src={item.icon} alt="icon" />
                    </div>
                ))}
            </div> */}

            <div className='dadosImpo'>
                {icones && icones.map((item) => (
                    <div key={item.id}>
                        <p>{item.text}</p>
                        <img src={item.icon} alt="icon" />
                    </div>
                ) ) }
            </div>

            
        </div>
    );
}

export default Importancia;