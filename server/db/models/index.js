const Video = require('./VideoModel');
const Keyword = require('./KeywordModel');
const View = require('./ViewModel');
View.belongsTo(Video);
Video.hasMany(View, { as: 'viewId' });
// Video.hasMany(Keyword, { as: 'keywordId' });

module.exports = {
  Video,
  View,
  Keyword
};
