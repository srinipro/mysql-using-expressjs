import * as express from 'express';
import { UserService } from './user/user.service';


export let APIRoutes = express.Router();
APIRoutes.use(UserService.routeName, new UserService().routes);
// Additional routes to be included/mapped here as mentioned above.
exports.module = APIRoutes;