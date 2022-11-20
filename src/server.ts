import { parseQuery } from "./parseQuery";
import express from "express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(parseQuery);
app.use("/compare", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
