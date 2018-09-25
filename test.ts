import test from 'ava'
import nock from 'nock'
import { Restaurants, Stocks } from './src'
import { RESTAURANTS_SERVICE_ORIGIN, STOCKS_SERVICE_ORIGIN } from './src/origins'

test.before(() => {
  nock(RESTAURANTS_SERVICE_ORIGIN)
    .get('/?latitude=90294.3&longitude=243.23626')
    .reply(200, []);

  nock(STOCKS_SERVICE_ORIGIN)
    .get('/')
    .reply(200, []);
})

test('Restaurants - getList', async t => {
  const res = await Restaurants.getList({ latitude: '90294.3', longitude: '243.23626' })
  t.deepEqual(res, [])
})

test('Stocks - getList', async t => {
  const res = await Stocks.getList({}, 'sadf9s7a9870s9d80fds8f09d')
  t.deepEqual(res, [])
})
