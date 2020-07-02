// config/index.js
const dbuser = 'username';
const dbpassword = 'password12321';

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds133311.mlab.com:33311/heroku_9n9ptdff`;

module.exports = MONGODB_URI;