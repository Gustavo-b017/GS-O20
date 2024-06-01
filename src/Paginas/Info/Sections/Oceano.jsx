import sea from '../../Dados/img/sea.svg'
function Oceano() {
    return (  
        <div className="Oceano">
            <div>
                <h1>Oceanos</h1>
                <p>Bem-vindo à nossa seção de Informações Educativas sobre os Oceanos! Aqui, você encontrará recursos valiosos sobre a sua importância e o impacto das mudanças climáticas.</p>
            </div>

            <img src={sea} alt="Oceanos" />
        </div>
    );
}

export default Oceano;