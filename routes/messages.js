const express = require('express');
const router = express.Router();
const slackService = require('../services/Slack');

/* Form for sending the message to slack channel */
router.get('/', function(req, res, next) {
  return slackService.getUsers()
    .then(r => r.members)
    .then(users => {
      return res.render('message-form', {
        users: users
      });
    })
    .catch(error => {
      return res.status(500).json({ error: error.message });
    })
});

router.post('/send', function(req, res, next) {
  const body = req.body;
  const message = body.message;
  const user = body.user;
  return slackService.sendMessage(user, message)
    .then(() => {
      return res.json({ status: 'OK' });
    })
    .catch(error => {
      return res.status(500).json({ error: error.message });
    });
});

module.exports = router;
