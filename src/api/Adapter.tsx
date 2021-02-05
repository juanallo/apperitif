export interface Drink {
  id: string
  title: string
  description: string
  image: {
    uri: string
  }
  instructions: string
  ingredients: Array<Ingredient>
}

export interface Ingredient {
  id: string
  measure: string
  name: string
}

export interface APIDrink {
  idDrink: string
  strDrink: string
  strCategory?: string
  strInstructions?: string
  strDrinkThumb: string
  strIngredient1?: string
  strIngredient2?: string
  strIngredient3?: string
  strIngredient4?: string
  strIngredient5?: string
  strIngredient6?: string
  strIngredient7?: string
  strIngredient8?: string
  strIngredient9?: string
  strIngredient10?: string
  strIngredient11?: string
  strIngredient12?: string
  strIngredient13?: string
  strIngredient14?: string
  strIngredient15?: string
  strMeasure1?: string
  strMeasure2?: string
  strMeasure3?: string
  strMeasure4?: string
  strMeasure5?: string
  strMeasure6?: string
  strMeasure7?: string
  strMeasure8?: string
  strMeasure9?: string
  strMeasure10?: string
  strMeasure11?: string
  strMeasure12?: string
  strMeasure13?: string
  strMeasure14?: string
  strMeasure15?: string
}

const adaptIngredients = (drink: APIDrink): Array<Ingredient> => {
  const ingredients: Array<Ingredient> = []
  for (let i = 1; i <= 15; i++) {
    const name = (drink as any)[`strIngredient${i}`]
    const measure = (drink as any)[`strMeasure${i}`]
    if (name && measure) {
      ingredients.push({
        id: name,
        name,
        measure,
      })
    }
  }
  return ingredients
}

export const adapt = (drink: APIDrink): Drink => {
  return {
    id: drink.idDrink,
    title: drink.strDrink,
    description: drink.strCategory ?? '',
    image: {
      uri: drink.strDrinkThumb,
    },
    instructions: drink.strInstructions ?? '',
    ingredients: adaptIngredients(drink),
  }
}
