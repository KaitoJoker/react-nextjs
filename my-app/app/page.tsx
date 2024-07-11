"use client";
import { Card, Nav, Carousel, Button } from 'react-bootstrap';
import MovieCard from './components/movieCard/moviesCard';
import MovieForms from './components/movieForm/movieForms';

export default function Home() {
  return (
    <div className='container'><br/>
      <Carousel data-bs-theme='dark' className='p-2'>
        <Carousel.Item>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.yZcWllIUcN_kGp1ExyX0hAHaJb&pid=Api&P=0&h=180/100px180" />
            <Card.Body>
              <Card.Title>Pokemon Ruby & Sapphire</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">View Detail</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.yZcWllIUcN_kGp1ExyX0hAHaJb&pid=Api&P=0&h=180/100px180" />
            <Card.Body>
              <Card.Title>Pokemon Ruby & Sapphire</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">View Detail</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.yZcWllIUcN_kGp1ExyX0hAHaJb&pid=Api&P=0&h=180/100px180" />
            <Card.Body>
              <Card.Title>Pokemon Ruby & Sapphire</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">View Detail</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      <br/>
      <div className='bg-info-subtle'>
        <MovieCard />
      </div>
    </div>
  );
}

