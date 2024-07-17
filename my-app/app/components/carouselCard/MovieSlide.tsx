"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Carousel} from 'react-bootstrap';

const MovieSlide = () => {
  // Menginisialisasi state dengan tipe yang tepat
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/movies')
        // Mengatur data respons dengan tipe yang telah dideklarasikan
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Carousel data-bs-theme="white">
        {movieData?.data.map((movie: any, index: number) => (
          // Menambahkan properti key pada elemen yang diulang
          <Carousel.Item key={index}>
            <Card>
              <Card.Img variant="top" src={movie.foto} className='object-cover' />
              <Card.Body className='text-center'>
                <Card.Title>{movie.judul}</Card.Title>
                <Card.Text>Rating: {movie.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))};
      </Carousel>
    </div>
  )
}
export default MovieSlide