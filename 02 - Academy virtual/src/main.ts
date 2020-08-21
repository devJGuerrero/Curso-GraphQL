import cors from "cors";
import express from "express";
import { schema } from "./graphql/schema";
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

const HTTPServer = createServer(app);
HTTPServer.listen(
  { port: PORT },
  () => console.log(`Running application => http://localhost:${ PORT }/graphql`)
);
