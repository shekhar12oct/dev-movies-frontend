const MovieCard = ({ movie }) => {
  return (
    <div className='rounded shadow p-4 bg-[rgba(95,158,160,0.2)]'>
      <h2 className='text-xl text-center font-bold'>{movie.title}</h2>
      {movie.img && (
        <img
          src={movie?.img}
          alt={movie?.title}
          className='mt-2 rounded h-9/10 w-full object-cover'
        />
      )}
    </div>
  );
};

export default MovieCard;
