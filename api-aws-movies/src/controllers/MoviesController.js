import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status-codes';
import { respond } from '../utils/response';
import BaseController from './BaseController';
import Movie from '../models/Movie';

export default class MoviesController extends BaseController {
  static basePath = '/api/v2/movies';

  initialize() {
    // GET get movie list
    this.app.get(MoviesController.basePath, MoviesController.getAllMovies);

    // GET get movie by id
    this.app.get(
      `${MoviesController.basePath}/:id`,
      MoviesController.getMovieById
    );

    // POST create a new movie
    this.app.post(MoviesController.basePath, MoviesController.createMovie);

    // PUT update existing movie
    this.app.put(
      `${MoviesController.basePath}/:id`,
      MoviesController.updateMovie
    );

    // DELETE delete movie
    this.app.delete(
      `${MoviesController.basePath}/:id`,
      MoviesController.deleteMovie
    );
  }

  static mount(app) {
    return new MoviesController(app);
  }

  // Start: Endpoints

  static async getAllMovies(req, res) {
    try {
      const movies = await new Movie().get();
      respond(res, OK, movies);
    } catch (e) {
      MoviesController.handleUnknownError(res, e);
    }
  }

  static async getMovieById(req, res) {
    try {
      const { id } = req.params;
      const movie = await new Movie(id).getByKey();

      if (!movie) {
        respond(res, NOT_FOUND);
        return;
      }

      respond(res, OK, movie);
    } catch (e) {
      MoviesController.handleUnknownError(res, e);
    }
  }

  static async createMovie(req, res) {
    try {
      const expectedParams = [
        'name',
        'description',
        'genre',
        'duration',
        'year',
        'imageUrl',
        'movieUrl'
      ];
      const validationErrors = [];

      expectedParams.forEach(p => {
        if (!req.body[p]) {
          validationErrors.push(`${p} parameter was not found in the request`);
        }
      });

      if (validationErrors.length > 0) {
        respond(res, BAD_REQUEST, {
          message: validationErrors.join('\n')
        });
        return;
      }

      const {
        name,
        description,
        genre,
        duration,
        year,
        imageUrl,
        movieUrl
      } = req.body;

      const movie = Movie.newMovie(
        name,
        description,
        genre,
        duration,
        year,
        imageUrl,
        movieUrl
      );
      await movie.create();

      respond(res, OK, movie);
    } catch (e) {
      MoviesController.handleUnknownError(res, e);
    }
  }

  static async updateMovie(req, res) {
    try {
      const { id } = req.params;

      const movie = await new Movie(id).getByKey();

      if (!movie) {
        respond(res, NOT_FOUND);
        return;
      }

      const allowedParams = [
        'name',
        'description',
        'genre',
        'duration',
        'year',
        'imageUrl',
        'movieUrl'
      ];

      Object.keys(req.body).forEach(p => {
        if (allowedParams.includes(p)) {
          movie[p] = req.body[p];
        }
      });

      await movie.update();

      respond(res, OK, movie);
    } catch (e) {
      MoviesController.handleUnknownError(e);
    }
  }

  static async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      await new Movie(id).delete();
      respond(res, OK);
    } catch (e) {
      MoviesController.handleUnknownError(e);
    }
  }

  // End: Endpoints
}
