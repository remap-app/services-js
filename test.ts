import test from 'ava'
import nock from 'nock'
import { Restaurants } from './src/Restaurants'
import { RESTAURANTS_SERVICE_ORIGIN } from './src/origins'

test.before(() => {
  nock(RESTAURANTS_SERVICE_ORIGIN)
    .get('/?latitude=90294.3&longitude=243.23626')
    .reply(200, []);
})

test('Restaurants - getList', async t => {
  const res = await Restaurants.getList({ latitude: '90294.3', longitude: '243.23626' })
  t.deepEqual(res, [])
})
