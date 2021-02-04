import { adapt } from './Adapter'
const fetchRandom = () => {
  return fetch(
    'http://www.thecocktaildb.com/api/json/v1/1/random.php',
  ).then((r) => r.json())
}
/*
 Ugly, ugly, ugly and ugly but there is no random API that returns multiple drinks.
*/
export const fetchOurPicks = () => {
  return Promise.all([
    fetchRandom(),
    fetchRandom(),
    fetchRandom(),
    fetchRandom(),
  ]).then((result) => {
    return result.reduce((accumulator, value) => {
      return accumulator.concat(value.drinks.map((d: any) => adapt(d)))
    }, [])
  })
}
