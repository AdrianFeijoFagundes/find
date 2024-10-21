import { Router } from "express";
import taskControllers from "./controllers/taskControllers.js";

const routes = Router();

routes.get("/tarefas", taskControllers.listar);
routes.post("/tarefas", taskControllers.inserir);
routes.put("/tarefas", taskControllers.editar);
routes.delete("/tarefas", taskControllers.excluir);

export default routes;