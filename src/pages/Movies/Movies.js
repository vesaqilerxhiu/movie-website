import React, { useState, useEffect } from 'react';
import movieList from '../../data/movieList.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GenreButton } from '../../components/UI/ButtonGroup';
import ReactPaginate from 'react-paginate';
import './movies.scss';

function Movies() {
  const allMovies = movieList.movies;
  const genres = movieList.genres.slice(0, 11);

  const location = useLocation();
  const navigate = useNavigate();

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('');

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', selected + 1);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleGenreClick = (genre) => {
    if (selectedGenre === genre) {
      setSelectedGenre('');
      updateUrlWithFilter('');
    } else {
      setSelectedGenre(genre);
      updateUrlWithFilter(genre);
    }
    setCurrentPage(0);
  };

  const updateUrlWithFilter = (genre) => {
    const searchParams = new URLSearchParams(location.search);
    if (genre) {
      searchParams.set('filter', genre);
    } else {
      searchParams.delete('filter');
    }
    searchParams.delete('page');
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };


  //me nderrimin e state-ave ndryshon edhe url, por me nderrimin e url nuk ndryshojne state-at,
  //prandaj me ane te useEffect e bejme qe me cdo nderrim te url te ndryshojne state-at
  useEffect(() => {             
    const searchParams = new URLSearchParams(location.search);
    const filter = searchParams.get('filter');
    const page = searchParams.get('page');
    if (filter) {
      setSelectedGenre(filter);
    } else {
      setSelectedGenre('');           
    }
    setCurrentPage(page ? parseInt(page, 10) - 1 : 0);
  }, [location.search]);

  const filteredMovies = selectedGenre
    ? allMovies.filter((movie) => movie.genres.includes(selectedGenre))
    : allMovies;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredMovies.slice(startIndex, endIndex);
  const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);   //sa rretha te faqeve me u shfaqe 

  return (
    <section className="movies-layout">
      <div className="movies-genre-buttons">
        {genres.map((genre) => (
          <GenreButton
            key={genre}
            className={`genre-button ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => handleGenreClick(genre)}
            label={genre}
          />
        ))}
      </div>
      <div className="movies-container">
        {currentItems.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-image">
              <Link to={`/movies/${movie.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                <img src={movie.posterUrl} alt={movie.title} />
              </Link>
            </div>
            <div className="movie-info">
              <h4>{movie.title}</h4>
              <div className="movie-details">
                <p>
                  {movie.year} &bull; {movie.runtime} min
                </p>
                <p>{movie.genres.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        className="pagination-layout"
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currentPage}
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </section>
  );
}

export default Movies;
