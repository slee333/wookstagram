import { generateToken } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    //confirmSecret: async (_, args, { prisma }) => { // When you use prisma as context this is how it looks like
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        return generateToken(user.id);
      } else {
        throw Error("Wrong Email Secret Combination");
      }
    }
  }
};
