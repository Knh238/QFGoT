export const VIDEO_ADDED = 'VIDEO_ADDED';
export const VIEW_ADDED = 'VIEW_ADDED';
export const GOT_VIDEO = 'GOT_VIDEO';
export const GOT_VIEW_REPORT = 'GOT_VIEW_REPORT';
export const GOT_ALL_VIDEOS = 'GOT_ALL_VIDEOS';
export const GOT_VIDEO_VIEWS = 'GOT_VIDEO_VIEWS';

export const videoAdded = video => ({
  type: VIDEO_ADDED,
  video
});
export const viewAdded = video => ({
  type: VIEW_ADDED,
  video
});
export const gotVideo = video => ({
  type: GOT_VIDEO,
  video
});
export const gotAllVideos = videoList => ({
  type: GOT_ALL_VIDEOS,
  videoList
});
export const gotViewReport = viewReport => ({
  type: GOT_VIEW_REPORT,
  viewReport
});
export const gotVideoViews = views => ({
  type: GOT_VIDEO_VIEWS,
  views
});

export const getVideo = id => {
  return async dispatch => {
    try {
      const video = {};
      const ref = await firebase
        .database()
        .ref('/videos')
        .once('value')
        .then(function(snapshot) {
          var videos = snapshot.val();
          for (let key in videos) {
            if (key === id) {
              const published = moment(videos[key].publishedDate).format(
                'MMMM DoYYYY, h:mm:ss a'
              );
              video.brand = videos[key].brand;
              video.name = videos[key].name;
              video.Published = published;
              video.totalViews = videos[key].totalViews;
              video.url = videos[key].storageRef;
            }
          }
        });
      dispatch(gotVideo(video));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

export const getAllVideos = () => {
  return async dispatch => {
    try {
      const allVideos = [];

      const ref = await firebase
        .database()
        .ref('/videos')
        .once('value')
        .then(function(snapshot) {
          var videos = snapshot.val();
          for (let key in videos) {
            let singleVideo = {
              key: key,
              brand: videos[key].brand,
              name: videos[key].name,
              url: videos[key].storageRef,
              views: videos[key].totalViews
            };
            allVideos.push(singleVideo);
          }
        });

      const videoList = allVideos;
      dispatch(gotAllVideos(videoList));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

export const addNewVideo = (name, brand, uri, category) => {
  return async dispatch => {
    try {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const videoDetails = {
            name: name,
            brand: brand,
            storageRef: uri,
            primaryVideoCategory: category,
            keywords: [],
            publishedDate: Date.now(),
            totalViews: 0,
            viewHistory: []
          };
          const newKey = firebase
            .database()
            .ref('videos')
            .push().key;

          const video = firebase
            .database()
            .ref('videos')
            .child(newKey)
            .set(videoDetails);
          dispatch(videoAdded(video));
        }
      });
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

export const addNewView = (videoId, brand, platform, user, viewCount) => {
  return async dispatch => {
    try {
      const viewDetails = {
        videoId: videoId,
        brand: brand,
        platform: platform,
        dateViewed: Date.now(),
        user: user
      };
      console.log('view count in action ', viewCount);
      const newKey = await firebase
        .database()
        .ref('views')
        .push().key;
      const view = await firebase
        .database()
        .ref('views')
        .child(newKey)
        .set(viewDetails);
      firebase
        .database()
        .ref('videos/' + videoId)
        .update({ totalViews: `${viewCount}` });
      dispatch(videoAdded(view));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

export const getVideoViews = id => {
  return async dispatch => {
    try {
      let videoViews = [];
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const ref = firebase.database().ref('views');
          ref.on('value', function(snapshot) {
            const allViews = snapshot.val();
            for (let key in allViews) {
              if (allViews[key].videoId === id) {
                let singleView = {
                  key: key,
                  brand: allViews[key].brand,
                  name: allViews[key].name,
                  url: allViews[key].storageRef,
                  totalViews: allViews[key].totalViews
                };
                videoViews.push(singleView);
              }
            }
          });
        }
      });

      dispatch(gotVideoViews(videoViews));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

export const getViewReport = id => {
  return async dispatch => {
    try {
      const videoInfo = {};
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const ref = firebase.database().ref('videos');
          ref.on('value', function(snapshot) {
            const video = snapshot.val();
            for (let key in video) {
              if (key === id) {
                const published = moment(video[key].publishedDate).format(
                  'MMMM DoYYYY, h:mm:ss a'
                );
                videoInfo.brand = ideo[key].brand;
                videoInfo.name = video[key].name;
                videoInfo.publishedDate = published;
                videoInfo.url = video[key].storageRef;
                videoInfo.totalViews = video[key].totalViews;
              }
            }
          });
        }
      });
      dispatch(gotViewReport(videoInfo));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};
