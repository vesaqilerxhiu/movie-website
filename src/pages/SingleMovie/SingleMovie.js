import React from 'react';
import movieList from '../../data/movieList.json';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../redux/Functions/actions';
import { AddWishlistButton } from '../../components/UI/ButtonGroup';
import './singleMovie.scss';

function SingleMovie() {
  const allMovies = movieList.movies;

  // dispatch is used to send actions to the Redux store. These actions describe changes you want to make to the state.
  // useSelector is used to extract pieces of state from the Redux store. 
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.initialReducer.wishlist);

  // kur marrim dicka nga url-ja, psh me ane te useParams ose URLSearchParams, ato merren si string, prandaj e perdorim parseInt qe stringun me e kthy ne numer
  // kodin me poshte e bejme qe ne rast se useri e ben search tek url-ja nje movie, id e te cilit nuk ekziston ne listen e movies tone (psh. id=300), atehere te shfaqet mesazhi me poshte
  // find() e kthen elementin e pare qe e ploteson kriterin (ose undefined nese nuk e ploteson), ndersa some() kthen true ose false
  const { id } = useParams();
  const singleMovie = allMovies.find(el => el.id === parseInt(id));
  if (!singleMovie) {
    return <div className='single-not-found'>Movie not found!</div>;
  }

  // kur e klikojme butonin per te bere nje movie add ne wishlist, fillimisht e shikojme se a ekziston ne wishlist (redux) ajo id e atij movie qe e kemi klikuar butonin. Nese nuk ekziston (dmth movie nuk eshte bere me heret add ne wishlist), atehere mund ta shtojme movien ne wishlist.
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
          <img src={process.env.PUBLIC_URL + singleMovie.posterUrl} alt={singleMovie.title} />
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
