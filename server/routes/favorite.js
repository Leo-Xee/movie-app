const expree = require('express');
const router = expree.Router();
const { Favorite } = require('../models/Favorite');

// 해당 영화의 favorite 개수 응답
router.post('/favoriteNumber', (req, res) => {
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    console.log(info);
    res.status(200).json({
      success: true,
      favoriteNumber: info.length,
    });
  });
});

// 유저의 해당 영화 favorite 여부 응답
router.post('/favorited', (req, res) => {
  Favorite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, info) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (info.length !== 0) {
      result = true;
    }

    res.status(200).json({
      success: true,
      favorited: result,
    });
  });
});

router.post('/addFromFavorite', (req, res) => {
  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, doc });
  });
});

router.post('/removeFromFavorite', (req, res) => {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    useFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

module.exports = router;
