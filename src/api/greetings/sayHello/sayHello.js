import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    sayHello: async () => {
      console.log(await prisma.users()); // how you protect prisma endpoint. People make requests to server, and our server returns a prisma request!
      return "Hello HIPPO!";
    }
  }
};
