// @ts-ignore
export const triviaScienceApi = axios.create({

  baseURL: 'https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=multiple',
  timeout: 8000
})

// export const triviaCartoons = axios.create({
//   baseURL: ' https://opentdb.com/api.php?amount=15&category=32&difficulty=hard&type=multiple',
//   timeout: 8000
// })