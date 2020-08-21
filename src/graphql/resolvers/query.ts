import { IResolvers } from "graphql-tools";

export const query: IResolvers = {
  Query: {
    hi(): string {
      return "Hola mundo desde GraphQL";
    },
    hiWithName(__: void, { name }): string {
      return `Hola ${ name }, bienvenido a GraphQL`;
    },
    hiCourseGraphQL(): string {
      return "Bienvenido al curso de GraphQL";
    }
  }
}
