export const getLogin = (req, res) => {
  const { login, password } = req.body
  if (login === "teste@gmail.com" && password === "12345") {
    return res.status(200).json({
      auth: true,
      message: "sucesso",
    })
  }
  return res.status(401).json({
    auth: false,
    message: "falha",
  })
}
