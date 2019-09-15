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

babel: sexy code to ugly code, for 