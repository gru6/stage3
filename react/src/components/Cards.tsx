import React from "react";
import { Props } from "types/interfaces";
import { movies } from "./cinemadata";

export class MovieCard extends React.Component<Props> {
  render() {
    const { title, director, year, actors, rating, imageUrl } =
      this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-details">
          <img src={imageUrl} alt={title} />
          <h2>{title}</h2>
          <p>Directed by {director}</p>
          <p>Year {year}</p>
          <p>Actors: {actors.join(", ")}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
    );
  }
}

export function CreateCards() {
  return (
    <div className="cards-container">
      {movies
        .map((movie) => <MovieCard key={movie.title} movie={movie} />)
        .slice(0, 6)}
    </div>
  );
}
