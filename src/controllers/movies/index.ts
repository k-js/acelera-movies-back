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
    const { id } = req.params
    const moviesIdRepository = getRepository(Movies)
    const moviesId = await moviesIdRepository.find({ where: { id } })
    return res.status(200).json(moviesId)
  } catch (error) {
    return res.status(401).json({
      message: "Falha ao encontrar Filme.",
    })
  }
}

export const postMovie = async (req, res) => {
  try {
    const moviesRepository = getRepository(Movies)
    const entidade = req.body
    const criandoMovie = await moviesRepository.save(entidade)
    return res.status(200).json({
      criandoMovie,
      auth: true,
      message: "sucesso",
    })
  } catch (error) {
    return res.status(500).json({ auth: false, message: "falha" })
  }
}

export const putMovieId = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const moviesRepository = getRepository(Movies)
    const editandoMovie = await moviesRepository.update(id, body)
    return res.status(200).json({
      auth: true,
      message: "sucesso",
    })
  } catch (error) {
    return res.status(500).json({ auth: false, message: "falha" })
  }
}

export const deleteMovieId = async (req, res) => {
  try {
    const { id } = req.params
    const moviesDeleteIdRepository = getRepository(Movies)
    const deleteId = await moviesDeleteIdRepository.delete(id)
    return res.status(200).json({
      message: "sucesso",
    })
  } catch (error) {
    return res.status(500).json({
      message: "falha",
    })
  }
}

export const putMovieId = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const moviesRepository = getRepository(Movies)
    const editandoMovie = await moviesRepository.update(id, body)
    return res.status(200).json({
      auth: true,
      message: "sucesso",
    })
  } catch (error) {
    return res.status(500).json({ auth: false, message: "falha" })
  }
}
