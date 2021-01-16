import React from 'react';
import './styles.css';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3'>
					<img className="image" src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<div className="details">
							<p>{movie.Title} ({movie.Year})</p>
						</div>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
