# Test App to test functionality with Slack API

It's an app to demonstrate the Slack messaging integration.

## How to run it?

1. Clone this project using `git clone` command.
2. Create a file named `env-variables.env` in the root directory in which we will provide our Slack App's configuration variables.
3. Visit https://api.slack.com/apps and create a new app.
4. Add _Incoming Webhook_ integration and it must have access to _users:read_ scope.
5. Copy _OAuth Access Token_ from the _OAuth and Permissions_ tab and _Webhook URL_ from the _Incoming Webhooks_ tab.
6. Paste the _OAuth Access Token_ and _Webhook URL_ in the `env-variables.env` file as shown below:

```
SLACK_WEBHOOK_URL=<Webhook URL>
SLACK_API_TOKEN=<OAuth Access Token>
SLACK_CHANNEL=<Slack channel name (without the leading #) linked with the incoming webhook>
```

7. Install `docker` and `docker-compose` from https://docs.docker.com/install/
8. Run the following command in the terminal:

```
docker-compose up -d
```

It will build the image and start the app using `docker-compose`.
9. Open your web browser and navigate to http://localhost:3000/messages

## Author

* **JabarJung Sandhu**