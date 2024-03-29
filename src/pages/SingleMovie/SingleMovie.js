import React from 'react';
import movieList from '../../data/movieList.json';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../redux/Functions/actions';
import { AddWishlistButton } from '../../components/UI/ButtonGroup';
import './singleMovie.scss';

function SingleMovie() {
  const allMovies = movieList.movies;

  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.initialReducer.wishlist);

  const { id } = useParams();
  const singleMovie = allMovies.find(el => el.id === parseInt(id));
  if (!singleMovie) {
    return <div className='single-not-found'>Movie not found!</div>;
  }

  function handleAdd() {
    const movieExists = wishlist.some(movie => movie.id === singleMovie.id);
    if (!movieExists) {
      dispatch(addMovie(singleMovie.id));
    }
  }

  return (
    <section className='single-container'>
      <div className='single-info'>
        <div className='single-poster'>
          <img src={singleMovie.posterUrl} alt={singleMovie.title} />
        </div>
        <div className='single-description'>
          <h2>{singleMovie.title}</h2>
          <p className='single-plot'>{singleMovie.plot}</p>
          <div className='single-details'>
            <div className='single-details-1'>
              <h4>Released</h4>
              <p>{singleMovie.year}</p>
              <h4>Duration</h4>
              <p>{singleMovie.runtime} min</p>
              <h4>Genre</h4>
              <p>{singleMovie.genres.join(', ')}</p>
            </div>
            <div className='single-details-2'>
              <h4>Cast</h4>
              <p>{singleMovie.actors}</p>
              <h4>Directors</h4>
              <p>{singleMovie.director}</p>
            </div>
          </div>
          {wishlist.some(movie => movie.id === singleMovie.id) ? ( 
            <p className='single-wishlist-text'>
              <span>{singleMovie.title}</span> is added to your <Link to='/wishlist'>Wishlist</Link>.
            </p>
          ) : (
            <AddWishlistButton onClick={handleAdd} label='Add to wishlist' />
          )}
        </div>
      </div>
      <div className='single-video'>
        <iframe src="https://www.youtube.com/embed/avz06PDqDbM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default SingleMovie;