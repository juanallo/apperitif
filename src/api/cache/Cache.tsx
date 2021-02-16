import AsyncStorage from '@react-native-async-storage/async-storage'
import { Drink } from '../Adapter'

//TODO think about how to clean the cache.
export const save = (key: string, drinks: Array<Drink>) => {
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

export const fetchFromCache = (key: string) => AsyncStorage.getItem(key)
