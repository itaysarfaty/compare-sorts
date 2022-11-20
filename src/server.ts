import { Driver } from "./classes/Driver";
import { Sorts } from "./sorts/Sorts";
import express, { RequestHandler } from "express";

const app = express();
const port = process.env.PORT || 3001;

const driver = new Driver(Sorts);

const handle: RequestHandler = (req, res, next) => {
  try {
    const results = driver.getResults();
    res.json(results);
  } catch (err) {
    if (err instanceof Error) {
      res.json(err.message);
    }
  }
};

app.get("/compare", handle);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
