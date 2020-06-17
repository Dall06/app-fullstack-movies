import { v4 } from 'uuid';
import DBManager from '../managers/DBmanager';

const userDBSchema = {
  id: {
    type: String,
    hashKey: true // asi se define partition key
  },
  name: String,
  description: String,
  genre: String,
  duration: String,
  year: String,
  uploadedAt: String,
  imageUrl: String,
  movieUrl: String
};

export default class Movie extends DBManager {
  id;

  name;

  description;

  genre;

  duration;

  year;

  imageUrl;

  movieUrl;

  uploadedAt;

  constructor(
    id,
    name,
    description,
    genre,
    duration,
    year,
    imageUrl,
    movieUrl,
    uploadedAt = new Date()
  ) {
    super('db-aws-movies', userDBSchema); // se manda llamar el constructor de la clase padre
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.duration = duration;
    this.year = year;
    this.imageUrl = imageUrl;
    this.movieUrl = movieUrl;
    this.uploadedAt = uploadedAt;
  }

  toDBFormat() {
    return {
      ...this, // spread,
      uploadedAt: this.uploadedAt.toString()
    };
  }

  toDBUpdateFormat() {
    const updates = this.toDBFormat();
    if (updates.id) {
      delete updates.id;
    }
    return updates;
  }

  getKey() {
    return { id: this.id };
  }

  // eslint-disable-next-line class-methods-use-this
  fromDBResponse(movie) {
    return new Movie(
      movie.id,
      movie.name,
      movie.description,
      movie.genre,
      movie.duration,
      movie.year,
      movie.imageUrl,
      movie.movieUrl,
      new Date(movie.uploadedAt)
    );
  }

  static newMovie(
    name,
    description,
    genre,
    duration,
    year,
    uploadedAt,
    imageUrl,
    movieUrl
  ) {
    const id = v4();
    return new Movie(
      id,
      name,
      description,
      genre,
      duration,
      year,
      uploadedAt,
      imageUrl,
      movieUrl
    );
  }
}
