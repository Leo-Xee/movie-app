require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const { User } = require('./models/User');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// 로그아웃

// 인증

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
