import { getMovieId, getMovies } from "@controllers/movies"
import { getLogin } from "@controllers/user/login"

export const defineRoutes = (app) => {
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMovieId)
  app.get("/login", getLogin)
}
