//import MovieModel from "../models/game.model.js";

class MovieController {
  async findAll(req, res) {
    try {
      const movies = await MovieModel.findAll();

      return res.status(200).json(movies);
    } catch (error) {
    console.error("Erro ao buscar todos os filmes", error);
    return res
      .status(500)
      .json({ mensagem: "Erro ao buscar todos os filmes", erro: error });
    }
  }

  async create(req, res) {
    try {
      const { title, category, duration, sinopse, releaseYear } = req.body;

      // Validação básica
      if (!title || !category || !duration || !sinopse || !releaseYear) {
        return res.status(400).json({
          error: "Campos obrigatórios não preenchidos!",
        });
      }

      const data = {
        title,
        category,
        duration,
        sinopse,
        releaseYear,
      };

      const newMovie = await MovieModel.create(data);

      return res.status(201).json({
        message: "New movie successufully created!",
        newMovie,
      });
    } catch (error) {
    console.error("Erro ao criar um novo filme", error);
      res.status(500).json({ error: "Error creating a new game" });
    }
  }
}

export default new GameController();