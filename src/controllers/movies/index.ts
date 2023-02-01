import { Movies } from "@models/entity/Movies"
import { getRepository } from "typeorm"

export const getMovies = async (req, res) => {
  try {
    const moviesRepository = getRepository(Movies)
    const movies = await moviesRepository.find()
    return res.status(200).json({
      movies,
      message: "sucesso",
    })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export const getMovieId = async (req, res) => {
  try {
    const id = req.params.id
    const moviesIdRepository = getRepository(Movies)
    const moviesId = await moviesIdRepository.find({ where: { id } })
    return res.status(200).json(moviesId)
  } catch (error) {
    return res.status(401).json({
      message: "Falha ao encontrar Filme.",
    })
  }
}
