// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// <GoogleLogin
// onSuccess={credentialResponse => {
//     const decoded = jwtDecode(credentialResponse?.credential);
//     console.log(decoded);
// }}
// onError={() => {
//     console.log('Login Failed');
// }}
// />
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contato() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className='Contato' noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Col className="mb-3 divContato">

        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Primeiro nome"
            defaultValue=""
          />

          <Form.Control.Feedback>Boa!!</Form.Control.Feedback>

        </Form.Group>
        
        <Form.Group as={Col} controlId="validationCustom02">
          
          
          <Form.Control
            required
            type="text"
            placeholder="Ultimo nome"
            defaultValue=""
          />
          
          <Form.Control.Feedback>Boa!!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="validationCustomUsername">
        
        
          <InputGroup className='Email' hasValidation>
        
            <InputGroup.Text className='iconeMail' id="inputGroupPrepend">@</InputGroup.Text>
        
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
        
            <Form.Control.Feedback type="invalid">
              Por favor, coloque seu E-mail
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom02">
          
          
        <Form.Control
          as="textarea"
          placeholder="Escreva sua mensagem..."
          style={{ height: '100px' }}

          required
          defaultValue=""
        />
          
          <Form.Control.Feedback>Obrigado pelo seu feedBack</Form.Control.Feedback>
        </Form.Group>
      </Col>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceita os termos de condição"
          feedback="É necessário aceitar"
          feedbackType="invalid"
          
        />
      </Form.Group>


      <Button type="submit" onClick={() => (alert('mensagem enviada com sucesso'))}>Enviar</Button>
    </Form>
  );
}

export default Contato;