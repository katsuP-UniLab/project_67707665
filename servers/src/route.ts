import e from 'express'

import { RouteController } from "./routes/index.ts"

export const Route = async (app: e.Express) => {
  await RouteController(app)
}
