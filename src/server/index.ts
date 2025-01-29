import express, {Express, Response} from "express";
//import dotenv from "dotenv";
import cors from 'cors';
import helmet from 'helmet';

import routes from '../routes'
import * as process from "node:process";

//dotenv.config();

const server = express();
//const port: string | number = process.env.PORT || 8000;

server.use(
    '/api',
    routes);

server.use(helmet());
server.use(cors());

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({limit: "50mb"}));

server.get('/', (req, res) => {
    res.redirect('/api');
})

export default server;