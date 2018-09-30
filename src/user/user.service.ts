
import * as express from 'express';
import { Router, Request, Response, NextFunction } from 'express';
import { MySql } from '../database/mysql.connection';
import { SelectQuery } from '../select.queries';

export class UserService {

    static routeName = '/userservice'; // userservice will be the base route for this service
    public routes = Router();
    constructor() {
        // It's not limited to single method, if needed add additional method(s) in same route,
        // to manipulate your result data or input data. 
        // example: this.routes.use('/', this.getUser, this.method1,...) in that case res.send should be in second or third method, 
        // to continue in same route use next() after first result, that will move to this.method1 ); 
        this.routes.get('/', this.getUser);
        this.routes.get('/userscount', this.getUsersCount);

    }

    public getUser(req: Request, res: Response, next: NextFunction) {

        MySql.connPool.query(SelectQuery.allUsers, (err, result) => {
            return res.send(MySql.toJSON(result));
        });
    }

    public getUsersCount(req: Request, res: Response, next: NextFunction) {
        MySql.connPool.query(SelectQuery.usersCount, (err, result) => {
            return res.send(MySql.toJSON(result));
        });
    }
}