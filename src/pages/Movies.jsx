import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieCardSkeleton from '../components/MovieCardSkeleton';

const Movies = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const endpoint = category
          ? `/api/movies/category/${category}`
          : '/api/movies/allmovies';
        const res = await axios.get(endpoint);
        setMovies(res.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold text-center mb-4'>
        {category ? `${category.toUpperCase()} Movies` : 'All Movies'}
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {loading ? (
          Array.from({ length: 10 }).map((_, idx) => (
            <MovieCardSkeleton key={idx} />
          ))
        ) : movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        ) : (
          <p className='text-center col-span-full text-gray-600'>
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Movies;
