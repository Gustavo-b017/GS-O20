import mar from './Videos/mar.png';

import Carrosel from "./Carosel";

function Videos() {
    return (  
        <section className="Videos">

            <div className="artigosVideos">
                
                <div className="Artigos">
                    <div className='divArtigos'>
                        <a href="https://www.noronha.pe.gov.br/a-importancia-dos-oceanos/">
                            <img src={mar} alt="" />
                            <p>Link do artigo</p>
                        </a>
                    </div>

                    <div className='divArtigos'>
                        <a href="https://www.noronha.pe.gov.br/a-importancia-dos-oceanos/">
                            <img src={mar} alt="" />
                            <p>Link do artigo</p>
                        </a>
                    </div>
                </div>

                <Carrosel  />
            </div>

            <div className="doubleVideos">
                
                <iframe src="https://www.youtube.com/embed/0nOtisVPlgw?si=FEDHWgcgz3JNaqYW" title="YouTube video player"></iframe>
            
                <iframe  src="https://www.youtube.com/embed/Rvw-23abRmc?si=MyfJs4xhbrxdsZAA" title="YouTube video player"></iframe>
                
            </div>
        </section>
    );
}

export default Videos;