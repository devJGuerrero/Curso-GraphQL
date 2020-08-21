import { IResolvers } from "graphql-tools";

export const query: IResolvers = {
  Query: {
    alumns(): string {
      return "Alumnos inscriptos curso de graphql";
    }
  }
}
