import { Router } from "express";
import { createUser } from "../controllers";

const routes = Router();

routes.post("/users", createUser);

export default routes;
