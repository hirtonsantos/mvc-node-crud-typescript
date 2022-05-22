import { Router } from "express";
import userCreateController from "./controllers/userCreate.controller";
import userDeleteSelfController from "./controllers/userDeleteSelf.controller";
import userListController from "./controllers/userList.controller";
import userListOneController from "./controllers/userListOne.controller";
import userLoginController from "./controllers/userLogin.controller";
import userUpdatePasswordController from "./controllers/userUpdatePassword.controller";
import { authUser } from "./middlewares/authUser.middleware";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users", authUser,userListController);
routes.get("/users/me", authUser, userListOneController);

routes.delete('/users/me', authUser, userDeleteSelfController)
routes.patch('/users/me/updatepassword', authUser, userUpdatePasswordController)

export default routes;
