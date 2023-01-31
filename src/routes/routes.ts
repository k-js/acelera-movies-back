import { getMovies } from "@controllers/movies"

export const defineRoutes = (app) => {
  app.get("/movies", getMovies)
}
