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

export interface CardDetailsProps {
  item: HomePageCard;
}

export interface HomePageCard {
  id: string;
  farm: number;
  server: string;
  secret: string;
  title?: string;
  description?: { _content: string };
  dateupload?: string;
  lastupdate?: string;
  originalformat?: string;
  width_o: number;
  height_o: number;
  ownername?: string;
  tags?: string;
  views?: string;
}

export interface Error {
  message: string;
}
