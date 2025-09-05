'use strict'

import express from "express";

import { Route } from "./src/route.ts";

const app: express.Express = express();

Route(app)

app.listen(19800, () => {
  console.clear()
  console.log();
  console.log("server on http://0.0.0.0:19800");
  console.log();
});
