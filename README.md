# @remap/services

[![CircleCI](https://circleci.com/gh/remap-app/services-js.svg?style=svg&circle-token=776fd770b8b1148a5dbef89b1ad7d4ae399638d2)](https://circleci.com/gh/remap-app/services-js)

A JavaScript client of ReMap Microservices for Browsers and Node.js

```sh
yarn add @remap/services
```

## Usage

```typescript
import ReMap, { Restaurant, RestaurantsSearchQuery } from '@remap/services'

const client: ReMap = new ReMap()

(async () => {
  const res: Restaurant[] = await client.getRestaurants({} as RestaurantsSearchQuery)
})()
```

### APIs

#### Restaurant

- `client.getRestaurants()`
- `client.getRestaurantById()`

#### Stocks

- `client.createStock()`
- `client.getStocks()`
- `client.getStockById()`
- `client.deleteStockById()`

#### Authentication

- `client.authenticate()`
