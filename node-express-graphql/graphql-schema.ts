let aboutMessage = 'Issue Tracker API v1.0';

const setAboutMessage = (_: object, { message }: { message: string }): string => {
  aboutMessage = message;
  return aboutMessage;
};

export const typeDefs = `
  type Query {
    about: String!
  }
  type Mutation {
    setAboutMessage(message: String!): String
  }
`;

export const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  }
};