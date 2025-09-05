import e from 'express'

import { CustomerLists } from './customers/list.ts'

export const dbController = async (app: e.Express) => {
  await CustomerLists(app)
}
