import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import FilesController from './controllers/FilesController';
import UsersController from './controllers/UsersController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

FilesController.mountController(app);
UsersController.mount(app);

export default app;
