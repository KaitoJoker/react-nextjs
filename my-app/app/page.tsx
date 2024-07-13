"use client";
import { Card, Carousel, Button } from 'react-bootstrap';
import MovieCard from './components/movieCard/moviesCard';
import MovieSlide from './components/carouselCard/MovieSlide';
export default function Home() {
  return (
    <div className='container'><br/>
      <MovieSlide />
      <br/>
      <div className='bg-info-subtle'>
        <MovieCard />
      </div>
    </div>
  );
}

