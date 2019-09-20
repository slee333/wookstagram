// Loading all configurations from .env file.
import "./env";

// graphql-yoga, our server! express server included!
import { GraphQLServer } from "graphql-yoga";

// Morgan is da logger
import logger from "morgan";
import schema from "./schema";  
import "./passport";
import { authenticateJwt } from "./passport";

// import { prisma } from "../generated/prisma-client"; // When we use context

/*

Above: Setup, require, imports!

Below: Actual server code!

*/

// Setup port (from .env file). If absent, set it to 4000
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});
/* 
context: sharing info between all graphql resolvers.
그러니까 passport에서 authenticate 후 pass down 하는 유저 정보를 담은 request가 context를 통해 
모든 graphql resolver에 전달되어서 db수정을 용이하게 할 수 있는 것. 
*/

server.express.use(logger("dev")); // Source of continuous posting.
server.express.use(authenticateJwt); // Every request going through server, server uses authenticateJwt

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost: ${PORT}`)
);
