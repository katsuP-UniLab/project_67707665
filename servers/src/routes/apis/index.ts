import e from 'express'

import { dbController } from './db/index.ts'

export const APIController = async (app: e.Express) => {
  await dbController(app)
}
