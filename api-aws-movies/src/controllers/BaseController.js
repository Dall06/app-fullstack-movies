import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { respond } from '../utils/response';

export default class BaseController {
  // clase padre de todos los controladores de la aplicación
  static basePath = '';

  app;

  constructor(app) {
    this.app = app;
    this.initialize();
  }

  // eslint-disable-next-line class-methods-use-this
  initialize() {
    // definir los paths, rutas, metodos CRUD
    throw new Error('Method not implented');
  }

  static mount() {
    // se asignan a app
    throw new Error('Method not implented');
  }

  static handleUnknownError(res, e) {
    //
    console.error(e);
    respond(res, INTERNAL_SERVER_ERROR, {
      message: e.message // body
    });
  }
}
