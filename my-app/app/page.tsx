"use client";
import MovieCard from './components/movieCard/moviesCard';
import MovieSlide from './components/carouselCard/MovieSlide';
const Home = () => {
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

export default Home