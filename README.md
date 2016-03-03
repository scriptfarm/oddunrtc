# OdunRtc

Yet another WebRtc video call solution with Node.js, Express.js and Angular.js.

### Prerequisite

* Node.js - [Download](https://nodejs.org/en/download/) and Install Node.js.
* MongoDB - [Download](https://www.mongodb.org/downloads#production) and Install mongodb - [Checkout their manual](https://docs.mongodb.org/manual/) if you’re just starting.

### Installation

```sh
npm install
```

### Configuration

Create a .env file in the root directory of your project. Add following environment-specific variables on new lines in the form of NAME=VALUE. For example:

```sh
PRIV_ENV='development'
MONGO_URL='@your-mongo-url/rdk-test-db'
MONGO_USER='your-mongo-db-user'
MONGO_PASSWORD='your-mongo-db-user-password'
GITHUB_CLIENT_ID='Github app. client id'
GITHUB_CLIENT_SECRET='Github app. client secret'
GITHUB_CLIENT_CALLBACKURL='http://localhost:5000/auth/github/callback'
FACEBOOK_CLIENT_ID='Facebook app. client id'
FACEBOOK_CLIENT_SECRET='Facebook app. client secret'
FACEBOOK_CLIENT_CALLBACKURL='http://localhost:5000/auth/facebook/callback'
TWITTER_CONSUMER_KEY='Twitter app. consumer key'
TWITTER_CONSUMER_SECRET='Twitter app. consumer secret'
TWITTER_CONSUMER_CALLBACKURL='http://localhost:5000/auth/twitter/callback'
GOOGLE_CLIENT_ID='Google app. client id'
GOOGLE_CLIENT_SECRET='Google app. client secret'
GOOGLE_CLIENT_CALLBACKURL='http://localhost:5000/auth/google/callback'
```

### Standalone usage
```sh
node index
```

License
----
MIT

**Free Software, Hell Yeah!**
