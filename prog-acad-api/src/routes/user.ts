import { Router } from "express";
import { createUser, getUserInformations, forgotPassword, resetPassword } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/users", createUser);
routes.get('/user/:id', getUserInformations);
routes.post("/forgotPassword", forgotPassword);
routes.post("/resetPassword", resetPassword);

export default routes;
