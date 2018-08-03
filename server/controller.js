var userID;

const register = (req, res) => {
  req.app
    .get("db")
    .register(req.body.username, req.body.password, req.body.profile_pic)
    .then(results => {
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
      userID = results[0].id;
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

module.exports = {
  register,
  login,
  getPosts,
  createPost
};
