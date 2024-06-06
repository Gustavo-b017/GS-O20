import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { dadosContato } from './dadosContato.jsx'

function Contato() {
    return (
        <div className='Contato'>
            <h1>contato</h1>

            <div className="form">
                

                {dadosContato.map(dado => (

                    <div key={dado.id}>
                    
                        <ion-icon name={dado.icon} />
                    
                        <input type="text" placeholder={dado.placeHolder} />
                    </div>
                ))}

                <button>enviar</button>

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse?.credential);
                        console.log(decoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>

        </div>
    );
}

export default Contato;