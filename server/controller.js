const register = (req, res) => {
  req.app
    .get("db")
    .register(req.body.username, req.body.password, req.body.profile_pic)
    .then(results => {
      console.log(req.session);
      req.session.user = results[0].id;
      res.status(200).json(results);
    })

    .catch(err => console.log(err));
};
const login = (req, res) => {
  req.app
    .get("db")
    .login(req.body.username, req.body.password)
    .then(results => {
      console.log(req.session);
      req.session.user = results[0].id;
      res.status(200).json(results[0]);
    })
    .catch(err => console.log(err));
};

const getPosts = (req, res) => {
  req.app
    .get("db")
    .getPosts()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => console.log(err));
};

const createPost = (req, res) => {
  req.app
    .get("db")
    .createPost(req.body.title, req.body.img, req.body.content, userID)
    .then(results => res.status(200).json(results))
    .catch(err => console.log(err));
};

const logout = (req, res) => {
  console.log("logout fired");
  req.session.destroy(() => {
    console.log(req.session);
    res.redirect("/");
  });
};

const getUser = (req, res) => {
  req.app
    .get("db")
    .getUser(req.session.user)
    .then(results => res.status(200).json(results))
    .catch(err => console.log(err));
};
module.exports = {
  register,
  login,
  getPosts,
  createPost,
  logout,
  getUser
};
