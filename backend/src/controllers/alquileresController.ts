import { Request, Response } from "express";
import pool from "../database";

class AlquileresController {
  public async lists(req: Request, res: Response) {
    await pool.query("SELECT * FROM alquileres", function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async list(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    await pool.query("SELECT * FROM alquileres WHERE id =?", [id], function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    await pool.query("INSERT INTO alquileres set ?", [req.body]);
    res.json({ mensaje: "Alquiler Guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM alquileres WHERE ID = ?", [id]);
    res.json({ mensaje: "Alquiler Eliminado" });
  }

  public async put(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("UPDATE alquileres set ? WHERE id=?", [req.body, id]);
    res.json({ mensaje: "Alquiler Actualizado" });
  }
}

export const alquileresController = new AlquileresController();
export default alquileresController;
