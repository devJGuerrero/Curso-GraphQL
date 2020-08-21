import "graphql-import-node";
import typeDefs from "./schema.graphql";
import { resolvers } from "../resolvers/map";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});
