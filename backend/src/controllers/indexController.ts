import { Request, Response } from "express";

class IndexController {
  public index(req: Request, res: Response) {
    res.json({ Mensaje: "API DE ALQUILER DE LAVADORAS" });
  }
}

export const indexController = new IndexController();
