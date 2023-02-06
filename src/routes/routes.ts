import {
  deleteMovieId,
  getMovieId,
  getMovies,
  postMovie,
} from "@controllers/movies"
import { getLogin } from "@controllers/user/login"

export const defineRoutes = (app) => {
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMovieId)
  app.get("/login", getLogin)
  app.post("/movies", postMovie)
  app.delete("/movies/:id", deleteMovieId)
}
