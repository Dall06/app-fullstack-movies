import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status-codes';
import { respond } from '../utils/response';
import BaseController from './BaseController';
import User from '../models/User';

// export es para importar a cualquier otro archivo
export default class UserController extends BaseController {
  static basePath = '/api/v2/users';

  initialize() {
    // endpoints -> es cada una de las funciones que se pueden ejecutar
    // Get users
    this.app.get(UserController.basePath, UserController.getUsers);
    // login
    this.app.post(`${UserController.basePath}login`, UserController.Login);
    // CREATE User
    this.app.post(UserController.basePath, UserController.createUser);
  }

  static mount(app) {
    return new UserController(app);
  }

  static async getUsers(req, res) {
    try {
      const movies = await new User().get();
      respond(res, OK, movies);
    } catch (e) {
      UserController.handleUnknownError(res, e);
    }
  }

  static async Login(req, res) {
    try {
      const expectedParams = ['email', 'password'];
      const validationErrors = []; // se iran agregando los errores

      expectedParams.forEach(param => {
        // se revisa si el body no tiene cada propiedad, entonces agrega la cadena parameter was not found...
        if (!req.body[param]) {
          validationErrors.push(
            `${param} parameter was not found in the request`
          );
        }
      });

      if (validationErrors.length > 0) {
        respond(res, BAD_REQUEST, {
          message: validationErrors.join('\\n')
        });
        return;
      }

      const { email, password } = req.body;
      let user = await new User().getByEmail(email);

      if (user[0].password !== password) {
        user = null;
        console.log('kk');
      } else {
        console.log('welcome');
      }

      if (!user) {
        respond(res, NOT_FOUND);
        return;
      }

      respond(res, OK, user);
    } catch (e) {
      UserController.handleUnknownError(res, e);
    }
  }

  static async createUser(req, res) {
    try {
      const expectedParams = ['email', 'password', 'accountType'];
      const validationErrors = []; // se iran agregando los errores

      expectedParams.forEach(param => {
        // se revisa si el body no tiene cada propiedad, entonces agrega la cadena parameter was not found...
        if (!req.body[param]) {
          validationErrors.push(
            `${param} parameter was not found in the request`
          );
        }
      });

      if (validationErrors.length > 0) {
        respond(res, BAD_REQUEST, {
          message: validationErrors.join('\\n')
        });
        return;
      }
      // validar que se ingresen los parametros
      const { email, accountType, password } = req.body;

      const user = User.newUser(email, accountType, password);
      await user.create();

      respond(res, OK, user);
    } catch (e) {
      UserController.handleUnknownError(res, e);
    }
  }
  // End: endpoints
}
