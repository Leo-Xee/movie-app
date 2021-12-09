require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { User } = require('./models/User');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const URI = process.env.MONGO_URI;
mongoose
  .connect(URI)
  .then(() => console.log('MongoDB Connected!!'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello world!!');
});

// 회원가입
app.post('/api/users/signUp', (req, res) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) return res.json({ sucess: false, err });
    return res.status(200).json({ success: true });
  });
});

// 로그인
app.post('/api/users/signIn', (req, res) => {
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

// 인증

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
