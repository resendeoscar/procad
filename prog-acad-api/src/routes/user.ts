import { Router } from "express";
import { createUser, forgotPassword, resetPassword } from "../controllers";

const routes = Router();

routes.post("/users", createUser);
routes.post("/forgotPassword", forgotPassword);
routes.post("/resetPassword", resetPassword);

export default routes;
