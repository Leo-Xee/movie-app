const { User } = require('../models/User');

const auth = (req, res, next) => {
  const token = req.cookies.x_auth;

  //
  User.findByToken(token, function (err, user) {
    if (err) return err;
    if (!user) return res.json({ isAuth: false, err: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
