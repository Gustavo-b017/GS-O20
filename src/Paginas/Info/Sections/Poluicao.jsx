import pelicano from './Poluicao/pelicano.svg'
import peixe from './Poluicao/peixe.svg'

function Poluicao() {
    return (  
        <section className='Poluicao'>
            
            <div className='cabecalho'>
                <div>
                    <h1>poluição</h1>
                    <img src={pelicano} />
                </div>
            </div>

            <div className="conteudo">
                <div className='textosSolo'>
                    
                    <p>A poluição marinha é um dos maiores desafios ambientais que enfrentamos hoje. Ela resulta da introdução de substâncias nocivas e resíduos nos oceanos, afetando negativamente a saúde dos ecossistemas marinhos e das espécies que dependem deles. Entre as principais fontes de poluição marinha estão o plástico, resíduos industriais, esgoto, produtos químicos agrícolas e derramamentos de petróleo.</p>
                    
                    <p>O plástico, em particular, representa uma ameaça significativa, pois pode levar centenas de anos para se decompor. Pequenos fragmentos de plástico,conhecidos como microplásticos, são facilmente ingeridos por animais marinhos, causando sérios danos à sua saúde e entrando na cadeia alimentar,eventualmente afetando os seres humanos. Produtos Químicos tóxicos e metais pesados também se acumulam nos tecidos dos organismos marinhos,levando a problemas de saúde e mortalidade.</p>
                    
                    <p>As mudanças climáticas aumentam a temperatura dos oceanos, causando o branqueamento e morte dos corais. A acidificação, resultante da absorção de CO2, dificulta a formação de conchas e esqueletos de organismos calcificantes. A elevação do nível do mar provoca erosão e inundação de zonas costeiras,impactando comunidades humanas e habitats.</p>
                </div>

                <div className="textoImg">
                    <p id='textoImgP'>Além de prejudicar a vida marinha, a poluição afeta a economia global. A indústria pesqueira, o turismo e a saúde humana são diretamente impactados pela degradação dos ambientes marinhos. Corais, que são vitais para a biodiversidade e proteção costeira, estão morrendo devido à poluição e ao aquecimento das águas, resultando em perda de habitat para muitas espécies.</p>
                    <img src={peixe} alt="" />
                </div>
            </div>

        </section>
    );
}

export default Poluicao;