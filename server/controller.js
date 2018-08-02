const register = (req, res) => {
  req.app
    .get("db")
    .register(req.body.username, req.body.password, req.body.profile_pic)
    .then(results => {
      req.session.user = results[0].id;
      res.status(200).json(results);
      console.log(req.session.user);
    })

    .catch(err => console.log(err));
};
const login = (req, res) => {
  req.app
    .get("db")
    .login(req.body.username, req.body.password)
    .then(results => {
      res.status(200).json(results[0]);
    })
    .catch(err => console.log(err));
};

module.exports = {
  register,
  login
};
