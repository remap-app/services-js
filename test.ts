import test from 'ava'
import nock from 'nock'
import ReMap from './src'
import { DEFAULT_OPTIONS } from './src/constants'

let client: ReMap

test.before(() => {
  client = new ReMap()

  nock(DEFAULT_OPTIONS.RESTAURANTS_SERVICE_ORIGIN)
    .get('/?latitude=90294.3&longitude=243.23626')
    .reply(200, [])

  nock(DEFAULT_OPTIONS.STOCKS_SERVICE_ORIGIN)
    .get('/')
    .reply(200, [])

  nock(DEFAULT_OPTIONS.AUTHENTICATION_SERVICE_ORIGIN)
    .post('/', { id_token: 'aa0s9d80f98ds' })
    .reply(200, {})
})

test('Restaurants - getList', async t => {
  const res = await client.getRestaurants({ latitude: '90294.3', longitude: '243.23626' })
  t.deepEqual(res, [])
})

test('Stocks - getList', async t => {
  const res = await client.getStocks({}, 'sadf9s7a9870s9d80fds8f09d')
  t.deepEqual(res, [])
})

test('Authentication - authenticate', async t => {
  const res = await client.authenticate('aa0s9d80f98ds')
  t.deepEqual(res, {})
})
