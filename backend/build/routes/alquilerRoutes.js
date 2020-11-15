"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alquileresController_1 = __importDefault(require("../controllers/alquileresController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", alquileresController_1.default.lists);
        this.router.get("/:id", alquileresController_1.default.list);
        this.router.post("/", alquileresController_1.default.create);
        this.router.delete("/:id", alquileresController_1.default.delete);
        this.router.put("/:id", alquileresController_1.default.put);
    }
}
const alquileresRoutes = new GamesRoutes();
exports.default = alquileresRoutes.router;
