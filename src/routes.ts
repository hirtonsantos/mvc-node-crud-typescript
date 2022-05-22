import { Router } from "express";
import userCreateController from "./controllers/userCreate.controller";
import userListController from "./controllers/userList.controller";
import userListOneController from "./controllers/userListOne.controller";
import userLoginController from "./controllers/userLogin.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users", userListController);
routes.get("/users/me", userListOneController);

export default routes;
