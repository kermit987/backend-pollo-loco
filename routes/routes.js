const express = require('express');

const app = express();
const { subscriptionPost, loginPost } = require('../controler/requestHandler.js');

const router = express.Router();

app.use('/', router);

router.use((request, response, next) => {
  console.log(request.method, request.url);
  next();
});

router.post('/subscription', subscriptionPost);
router.post('/login', loginPost);

module.exports = router;
