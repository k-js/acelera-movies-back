import {
  deleteMovieId,
  getMovieId,
  getMovies,
  postMovie,
  putMovieId,
} from "@controllers/movies"
import { getLogin } from "@controllers/user/login"
import { postUsers } from "@controllers/users/users"

export const defineRoutes = (app) => {
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMovieId)
  app.post("/login", getLogin)
  app.post("/movies", postMovie)
  app.put("/movies/:id", putMovieId)
  app.delete("/movies/:id", deleteMovieId)
  app.post("/users", postUsers)
}
