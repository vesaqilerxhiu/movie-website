import React from 'react'
import { Link } from 'react-router-dom'
import './movie.scss'

function Movie(props) {
    const movie = props.movie

  return (
    <>
    {movie.map((el) => (
        <div className="movie-card" key={el.id}>
            <div className="movie-image">
                <Link to={`/movies/${el.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                    <img src={el.posterUrl} alt={el.title} />
                </Link>
            </div>
            <div className="movie-info">
                <h4>{el.title}</h4>
                <div className="movie-details">
                    <p>
                        {el.year} &bull; {el.runtime} min
                    </p>
                    <p>{el.genres.join(', ')}</p>
                </div>
            </div>
            {props.children}
        </div>
    ))}
    </>
  )
}

export default Movie