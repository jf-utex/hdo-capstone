const express = require('express');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
// require('./services/passport');
const path = require('path');
const Comment = require('./models/comment');
// const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/comment', (req, res) => {
  console.log(req.body);
  Comment.create(req.body, (err, docs) => {
    res.json(docs);
  });
});

app.get('/comments', (req, res) => {
  Comment.find().then(docs => {
    res.json(docs);
  });
});

// require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
