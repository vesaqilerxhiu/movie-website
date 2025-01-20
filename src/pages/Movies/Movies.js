import React, { useState, useEffect } from 'react';
import movieList from '../../data/movieList.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GenreButton } from '../../components/UI/ButtonGroup';
import ReactPaginate from 'react-paginate';
import './movies.scss';

function Movies() {
  const allMovies = movieList.movies;
  const genres = movieList.genres.slice(0, 11);

  // const [allMovies, setAllMovies] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:8000/movies')
  //    .then(res => {
  //       return res.json();
  //    })
  //    .then(data => {
  //       setAllMovies(data);
  //    })
  // }, [])


  // URLSearchParams na mundeson me punu me query string-un e nje URL, me ane te metodave te ndryshme qe na ofron

  const location = useLocation(); // e merr krejt URL larte
  const navigate = useNavigate();

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('');

  const handlePageChange = ({ selected }) => {
    // selected property represents the selected page index from the pagination component, starts from 0
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // nese klikon psh ne butonin 2 te paginimi, ai e merr selected=1, se default funksioni i Paginimit qe e kemi marre nga interneti fillon numerimin nga 0 , dmth na ia shtojme + 1 qe me te qu nje ma larte

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', selected + 1);
    navigate(`${location.pathname}?${searchParams.toString()}`);
    // metoda toString() e konverton objektin URLSearchParams ne raw query string form, ashtu sic duket ne URL
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


  //me nderrimin e state-ave ndryshon edhe url, por me nderrimin e url psh kur e prekim butonin back - me shku ne faqen paraprake, atehere nuk ndryshojne state-at, prandaj me ane te useEffect e bejme qe me cdo nderrim te url te ndryshojne state-at
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
    // parseInt e konverton stringun e URL ne int (psh nese eshte 3, sepse 3 ne url eshte string e jo int)
    // -1 ndodh sepse nese ne url shkruan page=3, duhet ta bejme 2, sepse numerimi fillon prej 0 tek funksioni i Pagination qe e kemi marre te gatshem prej internetit
  }, [location.search]);

  const filteredMovies = selectedGenre
    ? allMovies.filter((movie) => movie.genres.includes(selectedGenre))
    : allMovies;

  const startIndex = currentPage * itemsPerPage; // 3*9=27
  const endIndex = startIndex + itemsPerPage; // 27+9=36
  const currentItems = filteredMovies.slice(startIndex, endIndex); // i merr movies prej 27 deri ne 36
  const pageCount = Math.ceil(filteredMovies.length / itemsPerPage); // sa rretha te faqeve me u shfaqe, psh nese jane 15 movies comedy, atehere 15/9=1, por pasi e perdorim ceil na behen 2 rretha faqesh 

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
                <img src={process.env.PUBLIC_URL + movie.posterUrl} alt={movie.title} />
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

      {/* tek ReactPaginate, numerimi i faqeve fillon nga 0*/}
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
