import { HomeIcones } from "./Dados/dados";

function Home() {
  

    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setMovies(data.results)
    //         console.log(data.results)
    //     })
    // }, [])

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

                {HomeIcones.map((icone) => ( 
                    <li className="Icones" key={icone.id}>
                        <div className="iconesSVG">
                            {icone.icon} 
                        </div>
                        
                        <p>{icone.text}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Home;
