import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async(_, args) =>
      prisma.users({
        where: {
          OR: [
            { userName_starts_with: args.term },
            { firstName_starts_with: args.term },
            { lastName_starts_with: args.term }
          ]
        }
      })
  }
};
