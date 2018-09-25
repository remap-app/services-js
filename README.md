# @remap/services

A JavaScript client of ReMap Microservices for Browsers and Node.js

```sh
yarn add @remap/services
```

## Usage

```typescript
import { Restaurants } from '@remap/services'

(async () => {
  const res = await Restaurants.getList({} as IQuery)
})()
```
