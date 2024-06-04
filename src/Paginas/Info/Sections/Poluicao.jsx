import pelicano from './Poluicao/pelicano.svg'
import peixe from './Poluicao/peixe.svg'

function Poluicao() {
    return (  
        <section className='Poluicao'>
            
            <div className='cabecalho'>
                <div>
                    <h1>poluicao</h1>
                    <img src={pelicano} />
                </div>
            </div>

            <div className="conteudo">
                <div className='textosSolo'>
                    
                    <p>A poluição marinha é um dos maiores desafiosambientais que enfrentamos hoje. Ela resulta daintrodução de substâncias nocivas e resíduos nosoceanos, afetando negativamente a saúde dosecossistemas marinhos e das espécies quedependem deles. Entre as principais fontes depoluição marinha estão o plástico, resíduosindustriais, esgoto, produtos químicos agrícolas ederramamentos de petróleo.</p>
                    
                    <p>O plástico, em particular, representa uma ameaçasignificativa, pois pode levar centenas de anos para sedecompor. Pequenos fragmentos de plástico,conhecidos como microplásticos, são facilmenteingeridos por animais marinhos, causando sérios danosà sua saúde e entrando na cadeia alimentar,eventualmente afetando os seres humanos. Produtosquímicos tóxicos e metais pesados também seacumulam nos tecidos dos organismos marinhos,levando a problemas de saúde e mortalidade.</p>
                    
                    <p>As mudanças climáticas aumentam a temperaturados oceanos, causando o branqueamento e mortedos corais. A acidificação, resultante da absorção deCO2, dificulta a formação de conchas e esqueletosde organismos calcificantes. A elevação do nível domar provoca erosão e inundação de zonas costeiras,impactando comunidades humanas e habitats.</p>
                </div>

                <div className="textoImg">
                    <p id='textoImgP'>Além de prejudicar a vida marinha, a poluição afeta aeconomia global. A indústria pesqueira, o turismo e asaúde humana são diretamente impactados peladegradação dos ambientes marinhos. Corais, que sãovitais para a biodiversidade e proteção costeira, estãomorrendo devido à poluição e ao aquecimento daságuas, resultando em perda de habitat para muitasespécies.</p>
                    <img src={peixe} alt="" />
                </div>
            </div>

        </section>
    );
}

export default Poluicao;