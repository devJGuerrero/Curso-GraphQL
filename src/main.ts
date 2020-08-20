import cors from "cors";
import express from "express";
import compression from "compression";

const app = express();
const PORT = 5300;

app.use("*", cors());
app.use(compression());

/** Routes application */
app.use("/", (req, res) => {
  res.send("Application Course GraphQL");
});

app.listen(
  { port: PORT },
  () => console.log(`Application runing. http://localhost:${ PORT }`)
);
