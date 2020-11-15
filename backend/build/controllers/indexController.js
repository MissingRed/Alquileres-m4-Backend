"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ Mensaje: "API DE ALQUILER DE LAVADORAS" });
    }
}
exports.indexController = new IndexController();
