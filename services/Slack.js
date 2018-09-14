const Slack = require('slack-node');
const bluebird = require('bluebird');
const webhookUri = process.env.SLACK_WEBHOOK_URL;
const apiToken = process.env.SLACK_API_TOKEN;
const channel = process.env.SLACK_CHANNEL;

function sendMessage(username, message) {
    const slack = new Slack();
    const webhookAsync = bluebird.promisify(slack.webhook);
    slack.setWebhook(webhookUri);
    return webhookAsync({
        channel: `#${channel}`,
        username: 'webhookbot',
        text: `<@${username}> said: ${message}`
    });
}

function getUsers() {
    const slack = new Slack(apiToken);
    const apiAsync = bluebird.promisify(slack.api);
    return apiAsync('users.list');
}

module.exports = {
    getUsers,
    sendMessage,
};
