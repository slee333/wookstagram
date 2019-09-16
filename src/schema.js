// api folder's gonna have many resolvers and .graphql files.
// * Schema.js is THE ONE FILE TO RULE THEM ALL..
// API 폴더 내에 있는 다른 graphql, resolver 파일들을 여기다 긁어모을거임!

import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { mergeResolvers, mergeTypes, fileLoader } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;
