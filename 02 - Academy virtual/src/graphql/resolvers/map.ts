import { query } from "./query";
import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  ...query
}
