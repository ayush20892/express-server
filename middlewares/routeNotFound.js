function routeNotFound(req, res, next) {
  res.status(404).json({ success: false, message: "The route you are looking for could't be found" })
}

module.exports = { routeNotFound }