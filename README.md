# wookstagram
instagram clone with Express, Prisma, React and React Native!

## Lecture 1

Installed all the dependencies.

    yarn init

    yarn add graphql-yoga

    yarn add nodemon

    yarn add babel-cli -D

Created *./src/server.js*. This is gonna be our server.

Nodemon required to run **scripts** in *package.json* that executes codes in *./src/server.js*

**script**: We added this:

    "dev": "nodemon --exec babel-node src/server.js

So everytime we run nodemon we execute *server.js* with **babel-node**

nodemon.json: added object w/ field **ext**. This configures extensions that nodemon keeps watching

babel: sexy code to ugly code

## Lecture 2

Installing GraphQL server

    yarn add dotenv   /// Read .env files

So we can setup server first and then add *prisma* to server code.

We did setup GraphQL server. Added .env file (though it does not have anything now) and started our own GraphQL server!

Installed all babel dependencies (@babel/core, @babel/preset-env, etc...)

## Lecture 3: Working like a professional

See /src/api/schema.js for comments