import cors from "cors";
import express from "express";
import { schema } from "./graphql/schema/";
import compression from "compression";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = 3000;

app.use("*", cors());
app.use(compression());

/** Routes application */
app.use("/", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(
  { port: PORT },
  () => console.log(`Application runing. http://localhost:${ PORT }/graphql`)
);
