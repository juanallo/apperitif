import { adapt, APIDrink, Drink } from './Adapter'
import { save, fetchFromCache } from './cache/Cache'

const getCacheKey = (search: string) => `@search/${search.toLocaleLowerCase()}`

export const fetchSearch = async (search: string): Promise<Array<Drink>> => {
  const cachedDrinks = await fetchFromCache(getCacheKey(search))

  if (cachedDrinks) {
    return JSON.parse(cachedDrinks).data
  }

  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  )
    .then((r) => r.json())
    .then((result) => result.drinks || [])
    .then((result) => result.map((d: APIDrink) => adapt(d)))
    .then((drinks) => {
      save(getCacheKey(search), drinks)
      return drinks
    })
}
