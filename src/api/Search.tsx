import { adapt, APIDrink, Drink } from './Adapter'
import AsyncStorage from '@react-native-async-storage/async-storage'

//TODO think about how to clean the cache.
const save = (key: string, drinks: Array<Drink>) => {
  if (drinks.length) {
    setTimeout(async () => {
      try {
        AsyncStorage.setItem(
          key,
          JSON.stringify({
            timestamp: Date.now(),
            data: drinks,
          }),
        )
      } catch (e) {
        // saving error
      }
    })
  }
}

export const fetchSearch = async (search: string): Promise<Array<Drink>> => {
  const cachedDrinks = await AsyncStorage.getItem(search)

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
      save(search, drinks)
      return drinks
    })
}
