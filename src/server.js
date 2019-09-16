// Loading all configurations from .env file. That is why we need "dotenv"
require("dotenv").config();

// graphql-yoga, our server! express server included!
import { GraphQLServer } from "graphql-yoga";

// Morgan is da logger
import logger from "morgan";
import schema from "./schema";
/*

Above: Setup, require, imports!

Below: Actual server code!

*/

// Setup port (from .env file). If absent, set it to 4000
const PORT = process.env.PORT || 4000;

// const typeDefs = `
//     type Query {
//         hello: String!
//     }`;

// const resolvers = {
//   Query: { hello: () => "HI" }
// };

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost: ${PORT}`)
);
