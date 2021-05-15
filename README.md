## How to start application

To install & run this application, clone the repo and do:

```
cd api
npm install
cd ../

cd app
npm install
cd ../


# in a different terminal
npm run api:dev

# in a different terminal
npm run app:dev
```



## Build Twitter w/ Express JS

- Twitter
- Things we'll implement: users, signups, logins, tweets, replies, retweet, follow, feeds, hashtags
- Things we won't: How to handle 1000000000 users, other two columns on the twitter home page (notifications, who to follow, trending etc)

- Pages:
  Landing page: /
  Signup page: /signup
  Login page: /login
  Home page: /home
  User Timelines: /<username>
  Tweet: /<username>/status/<tweetId>

- To build application backends

## Strategy | Stage 0:

- web server up and running
- listening to requests at a port
- store a list of tweets, users

- GET `/` -> return a list of tweets {id, message, username}
- GET `/:username` -> return all tweets made by `:username`
- GET `/:username/status/:id` -> return tweet with id `:id` if made by user `:username`

- POST `/:username/tweet` {message, username} -> add it to the list of tweets

- Mental Model of how backend servers work

## Strategy | Stage 1:

- refactor our web server

- GET `/api/tweets/` -> return a list of tweets {id, message, username}
- GET `/api/tweets/:username` -> return all tweets made by `:username`
- GET `/api/tweets/:username/status/:id` -> return tweet with id `:id` if made by user `:username`

- POST `/api/tweets/:username` {message, username} -> add it to the list of tweets

- Add a React frontend that can talk to our express api!



### General Advice

- Find the documentation for your framework
- Install your framework (npm init; npm install express)
- We can setup a web server that listens for requests on a port

## Extensions:

-> REST Client
