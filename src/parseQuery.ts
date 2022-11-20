import { RequestHandler } from "express";

// Interface for query
export interface IQuery {
  size: number;
  trials: number;
}

// Pass a validated query into res.locales.query
export const parseQuery: RequestHandler = (req, res, next) => {
  const query: Partial<IQuery> = req.query;

  try {
    validateQuery(query);
  } catch (err) {
    if (err instanceof Error) {
      res.json(err.message);
    }
  }

  const size = query.size ?? 1000;
  const trials = query.trials ?? 100;

  res.locals.query = {
    size: +size,
    trials: +trials,
  };
  next();
};

const validateQuery = (query: Partial<IQuery>) => {
  if (query.size) throwNaN(query.size, "Size");
  if (query.trials) throwNaN(query.trials, "Trials");
};

const throwNaN = (test: number, name: string) => {
  if (isNaN(test)) throw new Error(name + " must be a number!");
};
