import mar from './Videos/mar.png';

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

                <div className="video">
                    <iframe src="https://www.youtube.com/embed/3EVpe88gYdc?si=gN6MqErlwxsJTtLg" title="YouTube video player"></iframe>
                </div>

            </div>

            <div className="doubleVideos">
                
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/dLDR7u1kosc?si=ewa5X1pn0NO3JYZR" title="YouTube video player"></iframe>
                </div>

                <div className="video">
                    <iframe  src="https://www.youtube.com/embed/SmfM_EZFn0M?si=Ia4UjNGnpczi81F2"  title="YouTube video player"></iframe>
                </div>
            
                
                
            </div>
        </section>
    );
}

export default Videos;