export interface Drink {
  title: string
  description: string
  resolveImage: Function
  instructions: string
  Ingredients: Array<Ingredient>
}

export interface Ingredient {
  id: string
  measure: string
  name: string
}

const INGREDIENTS = [
  { id: '1', measure: '1oz', name: 'Blue Curacao' },
  { id: '2', measure: '1oz', name: 'Blue Curacao' },
  { id: '3', measure: '1oz', name: 'Blue Curacao 1' },
]

const INSTRUCTIONS =
  'This is just an example of the instructions to make some really nice blue coracao drink'

export const DRINKS = [
  {
    title: 'Margarita',
    description: 'Tequila - Lime',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg',
    }),
    ingredients: INGREDIENTS,
    instructions: INSTRUCTIONS,
  },
  {
    title: 'Snake Bite',
    description: 'Lager - Cider',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg',
    }),
    ingredients: INGREDIENTS,
    instructions: INSTRUCTIONS,
  },
  {
    title: 'Mulled Wine',
    description: 'Brandy - wine',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com//images//media//drink//iuwi6h1504735724.jpg',
    }),
    ingredients: INGREDIENTS,
    instructions: INSTRUCTIONS,
  },
  {
    title: '501 Blue',
    description: 'Blue Curacao',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg',
    }),
    ingredients: INGREDIENTS,
    instructions: INSTRUCTIONS,
  },
]
