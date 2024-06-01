import { useEffect, useState } from "react"


function Home() {

    const [homeIcons, setHomeIcons] = useState([])

    useEffect(() => {
        fetch(`https://665b786f3e4ac90a04d74e7a.mockapi.io/Home`)
        .then(response => response.json())
        .then(data => {
            setHomeIcons(data)
            console.log(data)
        })
    }, [])

    return (
        
        <div className='Home'>
            
            <h1>Preservando o futuro dos oceanos</h1>

            <div className="Chamada">
                <h2>Entenda e proteja nossos oceanos</h2>
                
                <p>acompanhe as condicoes atuais dos <br/>
                    oceanos e aprenda sobre a importancia<br/>
                    das correntes marinha, poluicao e <br/>
                    biodiversidade marinha
                </p>
                
            </div>

            <ul className="Entendimento">

                {homeIcons && homeIcons.map((icone) => (
                    <li className="Icones" key={icone.id}>
                        
                        <div className="iconesSVG">
                            <img src={icone.icon}  alt="" />
                        </div>
                        
                        <p>{icone.text}</p>
                    </li>
                ) ) }
            </ul>
        </div>
    );
}

export default Home;
