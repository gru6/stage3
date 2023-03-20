export interface Movie {
  title?: string;
  director?: string;
  year?: number;
  genre?: string[];
  actors: string[];
  rating?: number;
  duration?: number;
  language?: string;
  subtitles?: string[];
  country?: string;
  imageUrl?: string;
}

export interface Props {
  movie: Movie;
}
