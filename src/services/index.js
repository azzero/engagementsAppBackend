const engagement = require('./engagement/engagement.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(engagement);
};
