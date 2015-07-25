module.exports = function(app) {
  app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendStatus(404);
  });
};
