import { useEffect, useState } from 'react'

function Importancia() {

    const [Info, setInfo] = useState([])

    useEffect(() => {
        fetch(`https://665b786f3e4ac90a04d74e7a.mockapi.io/Informacoes`)
        .then(response => response.json())
        .then(data => {
            setInfo(data)
            console.log(data)
        })
    }, [])

    return (  
        <section className="Importancia">
            
            <h1>Importancia</h1>

            <div className='dadosImpo'>
                {Info && Info.map((item) => (
                    <div key={item.id}>
                        <p>{item.text}</p>
                        <img src={item.icon} alt="icon" />
                    </div>
                ) ) }
            </div>

            
        </section>
    );
}

export default Importancia;