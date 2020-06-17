import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import FilesController from './controllers/FilesController';
import MoviesController from './controllers/MoviesController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

FilesController.mountController(app);
MoviesController.mount(app);

export default app;
