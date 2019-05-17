const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Video = db.model('video');
const View = db.model('view');

describe('Video models', () => {
  describe('/videos/', () => {
    const newVideo = {
      name: 'titleSetBYYou',
      brand: 'NowThis',
      storageReference: 'https://www.youtube.com/watch?v=tQ9cz19YAxE&t=136s',
      primaryVideoCategory: 'dance',
      keywords: [],
      publishedDate: Date.now(),
      totalViews: 0,
      viewHistory: []
    };

    describe('attributes definition', () => {
      it('includes `name` and `brand` fields', async () => {
        const savedVideo = await Video.create({
          name: 'titleSetBYYou',
          brand: 'NowThis',
          storageReference:
            'https://www.youtube.com/watch?v=tQ9cz19YAxE&t=136s',
          primaryVideoCategory: 'dance',
          keywords: [],
          publishedDate: Date.now(),
          totalViews: 0,
          viewHistory: []
        });
        expect(savedVideo.name).to.equal('titleSetBYYou');
        expect(savedVideo.brand).to.equal('NowThis');
      });

      it('requires `storageReference`', async () => {
        // video.storageReference = null;

        let result, error;
        try {
          result = await Video.validate();
        } catch (err) {
          error = err;
        }

        if (result) throw Error('validation should fail when content is null');

        expect(error).to.be.an.instanceOf(Error);
        // notNull Violation:
      });
      it('GET /videos/', async () => {
        const res = await request(
          'https://kristin-g9m-coding.herokuapp.com/videos/'
        )
          .get('/')
          .expect(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0].name).to.be.equal('Yanis Marshall IF');
      });
      it('GET /videos/id', async () => {
        const res = await request(
          'https://kristin-g9m-coding.herokuapp.com/videos/'
        )
          .get('/1')
          .expect(200);
        expect(res.body).to.be.an('object');
        expect(res.body.name).to.be.equal('Yanis Marshall IF');
      });
    });
  });
});
describe('View models', () => {
  describe('attributes definition', () => {
    it('includes `videoId` and `brand` fields', async () => {
      const savedView = await View.create({
        videoId: 1,
        brand: 'NowThis',
        platform: 'snapChat',
        dateViewed: Date.now(),
        user: 'anonymous'
      });

      expect(savedView.dataValues.videoId).to.equal(1);
      expect(savedView.dataValues.brand).to.equal('NowThis');
    });

    it('GET /views/', async () => {
      const res = await request(
        'https://kristin-g9m-coding.herokuapp.com/videos/'
      )
        .get('1/views')
        .expect(200);
      expect(res.body).to.be.an('object');
      expect(res.body.views[0].videoId).to.be.equal(1);
      expect(res.body.views[0].platform).to.be.equal('snapChat');
    });
  });
});
