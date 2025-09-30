import express from "express";

// Importar todas as rotas
import moviesRouter from "./movies.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/movies", moviesRouter);

export default router;