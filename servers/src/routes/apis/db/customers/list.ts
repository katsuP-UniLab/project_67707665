import e from 'express'

import {client} from '../../../../db/client.ts'

export const CustomerLists = async (app: e.Express) => {
  app.get('/api/customer/list', async (_req: e.Request, res: e.Response) => {
    const list = await client.findMany()

    console.log(list);


    res.send('')
  })
}
