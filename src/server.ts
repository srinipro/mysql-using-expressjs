import { Request, Response } from 'express';
import * as express from "express";
import { UserService } from './user/user.service';
import { APIRoutes } from './api.routes';
import { MySql } from './database/mysql.connection';
import * as compression from 'compression'; 
import * as bodyParser from 'body-parser';
import * as cors from 'cors';  
const app = express();
// Whatever routes created across api
new MySql();
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(APIRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send({ result: 'Add your application title here, REST API', version: '1.0.0'});
});

app.listen(3000, () => {
    // Please change your localhost port number you already used, 3000 i just mentioned for example.
    console.log('Add your Application Title here running in http://localhost:%d', 3000);
    console.log('Press Ctrl+C to stop API service.');
});
