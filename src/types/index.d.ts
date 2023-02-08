declare module "*.jpg"
declare module "*.png"
declare module "*.svg"

export type SearchArray = {
  publisher: string,
  image: string,
  title: string,
  id: string,
}[]

//   export type FetchFunction = (a: string) => void

export type Ingredients = {
  quantity: number,
  unit: string,
  description: string,
}[]

  export type DisplayRecipe =
  {
      id: string,
      title: string,
      publisher: string,
      sourceUrl: string,
      image: string,
      servings: string,
      cookingTime: string,
      ingredients: Ingredients
    }
  
    export type FetchFunction = (a: string) => void
