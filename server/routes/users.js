const express = require('express');
const router = express.Router();

const { User } = require('../models/User');
const { auth } = require('../middleware/auth');

// 회원가입
router.post('/signUp', (req, res) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) return res.json({ signUpSucess: false, err });
    return res.status(200).json({ signUpSuccess: true });
  });
});

// 로그인
router.post('/signIn', (req, res) => {
  // 해당 이메일과 일치하는 유저를 DB에서 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        signInSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });

    // 비밀번호가 일치하는지 확인
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        return res.json({
          signInSuccess: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }

      // 일치하면 JWT 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // JWT를 쿠키에 저장
        res.cookie('x_auth', user.token).status(200).json({
          signInSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

// 로그아웃
router.post('/signOut', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err) => {
    if (err) return res.json({ signOutSuccess: false, err });
    return res.status(200).json({
      signOutSuccess: true,
    });
  });
});

// 인증
router.get('/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

module.exports = router;
