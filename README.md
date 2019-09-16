# wookstagram
instagram clone with Express, Prisma, React and React Native!

## Lecture 1.1

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

## Lecture 1.2

Installing GraphQL server

    yarn add dotenv   /// Read .env files

So we can setup server first and then add *prisma* to server code.

We did setup GraphQL server. Added .env file (though it does not have anything now) and started our own GraphQL server!

Installed all babel dependencies (@babel/core, @babel/preset-env, etc...)

## Lecture 1.3: Working like a professional

See /src/api/schema.js for comments

## Lecture 2.1 Intro to Prisma

Prisma: Object-oriented-Mapper. Solve difficult problems related to Db.  
Prisma: defines model of your Db for your app in GraphQL! 내가 가지고 있는 데이터에서 모델을 뽑아서 다루기 쉽게 만들어준다 생각하자.  
GraphQL은? 데이터베이스 위의 레이어. 쉬운 query와 mutation을 가능하게 하고, Prisma는 그보다 한 단계 위에서 GraphQL을 다룬다.  
데이터를 들고 있으면 그 데이터에 맞는 GraphQL Query와 Mutation을 자동 생성해준다 생각하면 편하다!

Prisma의 datamodel을 만들었다.  

Prisma를 depoly하면 Prisma endpoint를 알려주는데 이 주소는 결코 유저들에게 알려서는 안된다. You can basically manage all the data from the endpoint.   
거기다가 deploy시 자동으로 mutation과 query를 다 만들어준다! 예를 하나 들면

    mutation {
        createUser(data: {
            userName:"Pila",
            firstName: "Mini",
            lastName: "Manimo",
            email: "minimanimo@gmail.com"
        }){
            id
        }
    }

이런 mutation을 자동으로 만들어준다.

## Lecture 2.3

prisma.yml 안엔 url들이 다 들어있다. 

**절대 GITHUB에 업로드하지 말자**

generated에 생성된 파일들을 이용해 prisma 서버와 communicate하게 된다.

