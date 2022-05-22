import { Router } from "express";
import userCreateController from "./controllers/userCreate.controller";
import userDeleteSelfController from "./controllers/userDeleteSelf.controller";
import userListController from "./controllers/userList.controller";
import userListOneController from "./controllers/userListOne.controller";
import userUpdateController from "./controllers/userUpdatePassword.controller";


const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);

routes.delete('/users/:id', userDeleteSelfController)
routes.patch('/users/:id', userUpdateController)

export default routes;
