import cors from "cors";
import express from "express";
import { schema } from "./graphql/schema/";
import compression from "compression";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

const app = express();
const PORT = 3000;

app.use("*", cors());
app.use(compression());

const clientServer = new ApolloServer({
  schema,
  introspection: true
});

clientServer.applyMiddleware({ app });

const httpServer = createServer(app);
httpServer.listen(
  { port: PORT },
  () => console.log(`Application runing. http://localhost:${ PORT }/graphql`)
);
