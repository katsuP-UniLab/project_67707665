import e from "express";
import { dbController } from "./apis/db/index.ts";

export const RouteController = async (app: e.Express) => {
  app.get("/", (_req: e.Request, res: e.Response) => {
    res.send("Hello world");
  });

  await dbController(app);
};
