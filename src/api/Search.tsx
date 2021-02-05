import { adapt, APIDrink, Drink } from './Adapter'

export const fetchSearch = (search: string): Promise<Array<Drink>> => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  )
    .then((r) => r.json())
    .then((result) => result.drinks || [])
    .then((result) => result.map((d: APIDrink) => adapt(d)))
}
