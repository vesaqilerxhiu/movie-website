import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import movieList from '../../data/movieList.json';
import { WishlistButton } from '../../components/UI/ButtonGroup';
import { deleteMovie } from '../../redux/Functions/actions';
import './wishlist.scss'

function Wishlist() {
  const wishlist = useSelector(state => state.initialReducer.wishlist);
  const allMovies = movieList.movies;
  const dispatch = useDispatch();

  const handleDelete = (movieId) => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <div className='wishlist-layout'>
      <h1 className='wishlist-title'>A collection of your cinematic desires</h1>
      {wishlist.length === 0 ? (
        <p className='wishlist-empty'>
          Your wishlist is empty. Start creating it by adding movies that interest you.
        </p>
      ) : (
        <div className='wishlist-container'>
          {wishlist.map(wishlistMovie => {
            const movie = allMovies.find(el => el.id === wishlistMovie.id);
            if (movie) {
              return (
                <div key={movie.id} className='wishlist-movie'>
                  <div className='wishlist-movie-image'>
                    <img src={movie.posterUrl} alt={movie.title} />
                  </div>  
                  <div className='wishlist-movie-info'>
                    <h4>{movie.title}</h4>
                    <p>{movie.year}</p>
                    <p>{movie.runtime} min</p>
                    <div className='wishlist-buttons'>
                      <WishlistButton to={`/movies/${movie.id}`} label='Watch' />
                      <WishlistButton onClick={() => handleDelete(movie.id)} label='Remove' />
                    </div>
                  </div>                
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
