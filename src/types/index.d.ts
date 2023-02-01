declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.svg" {
    const path: string;
    export default path;
}

export type SearchArray = (
    [{
      publisher: string,
      image: string,
      title: string,
      id: string,
    }]
  )

//   export type FetchFunction = (a: string) => void

  export type DisplayRecipe =
  {
      id: string,
      title: string,
      publisher: string,
      sourceUrl: string,
      image: string,
      servings: string,
      cookingTime: string,
      ingredients: [
        {
          quantity: number,
          unit: string,
          description: string,
        }
      ],
    }
  