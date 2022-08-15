import { Router } from "express";
import { closeFormulary, createFormulary, getFormulariesByUser, getFormularyInformations, upsertFormularyAnswer } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/formulary", auth, createFormulary);
routes.put("/formularyAnswer", auth, upsertFormularyAnswer);
routes.get("/formulary/:id", auth, getFormularyInformations);
routes.get("/formularies", auth, getFormulariesByUser);
routes.post("/formulary/:id/close", auth, closeFormulary);

export default routes;
