import { Router } from "express";
import alquileresController from "../controllers/alquileresController";

class GamesRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", alquileresController.lists);
    this.router.get("/:id", alquileresController.list);
    this.router.post("/", alquileresController.create);
    this.router.delete("/:id", alquileresController.delete);
    this.router.put("/:id", alquileresController.put);
  }
}

const alquileresRoutes = new GamesRoutes();
export default alquileresRoutes.router;
