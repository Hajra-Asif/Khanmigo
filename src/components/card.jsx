import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({heading, tagline , btnText}) {
  return (
    <Card style={{ width: '18rem' , backgroundColor: 'none' }} className='card'>
      <Card.Body >
        <Card.Title className='fs-3'>{heading}</Card.Title>
        <Card.Text>{tagline}</Card.Text>
        <Button variant="primary">{btnText}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;