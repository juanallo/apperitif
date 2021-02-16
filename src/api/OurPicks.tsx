import { adapt, APIDrink, Drink } from './Adapter'
import { save, fetchFromCache } from './cache/Cache'

const CACHE_KEY = '@ourPicks/last'

const fetchRandom = () => {
  return fetch(
    'http://www.thecocktaildb.com/api/json/v1/1/random.php',
  ).then((r) => r.json())
}
/*
 Ugly, ugly, ugly and ugly but there is no random API that returns multiple drinks.
*/
export const fetchOurPicks = (): Promise<Array<Drink>> => {
  return Promise.all([
    fetchRandom(),
    fetchRandom(),
    fetchRandom(),
    fetchRandom(),
  ])
    .then((result) => {
      return result.reduce((accumulator, value) => {
        return accumulator.concat(value.drinks.map((d: APIDrink) => adapt(d)))
      }, [])
    })
    .then((data) => {
      save(CACHE_KEY, data)
      return data
    })
}

export const fetchOurPicksFromCache = async (): Promise<Array<Drink>> => {
  const fromCache = await fetchFromCache(CACHE_KEY)

  if (!fromCache) {
    throw new Error('No Our Picks cached')
  }

  return JSON.parse(fromCache).data
}
