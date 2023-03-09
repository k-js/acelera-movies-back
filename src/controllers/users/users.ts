import md5 from "md5"
import { Users } from "@models/entity/Users"
import { getRepository } from "typeorm"

export const postUsers = async (req, res) => {
  try {
    const moviesRepository = getRepository(Users)
    const entidade = req.body
    console.log(entidade)
    const criandoMovie = await moviesRepository.save({
      login: entidade.login,
      password: md5(entidade.password),
    })
    return res.status(200).json({
      criandoMovie,
      auth: true,
      message: "sucesso",
    })
  } catch (error) {
    return res.status(500).json({ auth: false, message: "falha" })
  }
}
