import * as mysql from 'mysql';
import { Pool } from 'mysql';

export class MySql {
    static connPool: Pool;
    constructor() {
        MySql.connPool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
<<<<<<< HEAD
            password: '****',
=======
            password: '******',
>>>>>>> 654ef71dad46eb5793febb4945210a3ef9bfabae
            database: 'demo'
        });
       // console.log('MySqlConnection Constructor called');
        MySql.connPool.on('enqueue', function () {
            console.log('Waiting for available connection slot');
          });
        MySql.connPool.on('release', function (connection) {
            console.log('Connection %d released', connection.threadId);
        });
    }
    static toJSON(rawObject: any) {
        return JSON.stringify(rawObject)
    }
}
