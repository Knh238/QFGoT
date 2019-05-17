const expect = require('chai').expect;
const request = require('supertest');

const app = 'https://kristin-g9m-coding.herokuapp.com/videos/';
const agent = request.agent(app);

const db = require('../db');
const Video = db.model('video');
const View = db.model('view');

describe('Videos Route:', () => {
  describe('GET /videos', () => {
    it('responds with an array via JSON', async () => {
      const res = await agent
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200);

      // res.body is the JSON return object
      // expect(res.body).to.be.an.instanceOf('object');
      expect(res.body[2].name).to.equal('miss Vanjie ');
    });
  });

  describe('POST /videos/', () => {
    it('creates a new video', async () => {
      const res = await agent
        .post('/')
        .send({
          name: 'titleSetByYou',
          brand: 'NowThis',
          storageReference:
            'https://www.youtube.com/watch?v=tQ9cz19YAxE&t=136s',
          primaryVideoCategory: 'dance',
          keywords: [],
          publishedDate: Date.now(),
          totalViews: 0,
          viewHistory: []
        })
        .expect(201);

      expect(res.body.name).to.equal('titleSetByYou');
      expect(res.body.id).to.not.be.an('undefined');
    });
  });

  describe('View Route:', () => {
    describe('POST /view/', () => {
      it('creates a new view', async () => {
        const res = await agent
          .post('/view/')
          .send({
            videoId: 1,
            brand: 'NowThis',
            platform: 'snapChat',
            dateViewed: Date.now(),
            user: 'anonymous'
          })
          .expect(201);

        expect(res.body.newView.videoId).to.equal(1);
        expect(res.body.newView.user).to.equal('anonymous');
      });
      describe('GET /view report', () => {
        it('responds with an array via JSON', async () => {
          const res = await agent
            .get('/1/report')
            .expect('Content-Type', /json/)
            .expect(200);

          expect(res.body.name).to.equal('Yanis Marshall IF');
          expect(res.body.brand).to.equal('NowThis');
          expect(res.body).to.have.property('published');
          expect(res.body.count).to.be.a('number');
        });
      });
    });
  });
});
