const router = require('express').Router();
const Sequelize = require('sequelize');
const { Video } = require('../db/models');
const { View } = require('../db/models');

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const videoInfo = req.body;
    videoInfo.publishedDate = Date.now();

    const newVideo = await Video.create(videoInfo);

    res.status(201).json(newVideo);
  } catch (err) {
    next(err);
  }
});

router.get('/:videoId', async (req, res, next) => {
  try {
    const vidId = req.params.videoId;
    const videoInDB = await Video.findById(vidId);

    if (videoInDB) {
      res.status(200).json(videoInDB);
    } else {
      res
        .status(404)
        .json(
          'Opps! Does not compute! Video has not been previously entered in the system'
        );
    }
  } catch (err) {
    next(err);
  }
});
router.get('/', async (req, res, next) => {
  try {
    const videos = await Video.findAll();
    return res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
});

//gets view report in format listed in instructions
router.get('/:videoId/report', async (req, res, next) => {
  try {
    const videoId = req.params.videoId;
    const viewHistory = await View.findAll({ where: { videoId: videoId } });
    const video = await Video.findById(videoId);
    const responseObject = {
      name: video.name,
      brand: video.brand,
      published: video.publishedDate,
      count: viewHistory.length
    };

    res.status(200).json(responseObject);
  } catch (err) {
    next(err);
  }
});

//returns a list of views in detail
router.get('/:videoId/views', async (req, res, next) => {
  try {
    const viewHistory = await View.findAll({
      where: { videoId: req.params.videoId }
    });

    res.status(200).json({ views: viewHistory });
  } catch (err) {
    next(err);
  }
});
//returns the total views
router.get('/:videoId/viewsTotal', async (req, res, next) => {
  try {
    const videoId = req.params.videoId;
    const viewHistory = await View.findAll({ where: { videoId: videoId } });

    //returns 10
    res.status(200).json({ viewsTotal: viewHistory.length });
  } catch (err) {
    next(err);
  }
});

router.post('/view/', async (req, res, next) => {
  try {
    const videoInfo = req.body;
    videoInfo.dateViewed = Date.now();
    const videoId = req.body.videoId;
    const newView = await View.create(videoInfo);
    res.status(201).json({ newView: newView });
  } catch (err) {
    next(err);
  }
});
