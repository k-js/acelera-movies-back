import { getMovieId, getMovies } from "@controllers/movies"

export const defineRoutes = (app) => {
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMovieId)
}
