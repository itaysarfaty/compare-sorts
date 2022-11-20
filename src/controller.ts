import { RequestHandler } from "express";
import { Numbers } from "./classes/collections/Numbers";
import { Driver } from "./classes/Driver";
import { SortNumbers as Sort } from "./classes/sorts/collections";
import { IQuery } from "./middleware/parseQuery";

const driver = new Driver(Sort, new Numbers(1000, 100_000));

const compare: RequestHandler = (req, res, next) => {
  try {
    const query: IQuery = res.locals.query;
    const results = driver.getResults(query.size, query.trials);
    res.json(results);
  } catch (err) {
    if (err instanceof Error) {
      res.json(err.message);
    }
  }
};

export default {
  compare,
};
