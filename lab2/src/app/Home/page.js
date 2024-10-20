import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <Container>
          <Row>
            <Col xs={{ order: 'first' }} className='text-success'>Hola, soy una columna a la izquierda</Col>
            <Col xs className='text-danger'>Hola, soy una columna en el centro</Col>
            <Col xs={{ order: 'last' }} className='text-info'>Hola, soy una columna a la derecha</Col>
          </Row>
        </Container>
      );
}